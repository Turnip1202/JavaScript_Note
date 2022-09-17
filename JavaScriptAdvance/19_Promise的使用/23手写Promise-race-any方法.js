const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try { const result = execFn(value); resolve(result) } catch (err) { reject(err) }
}
class TKPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = []
    this.onRejectedFns = []
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach(fn => fn(this.value))

        })
      }
    }
    const reject = (reason) => {
      if (this.status == PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason;
          this.onRejectedFns.forEach(fn => fn(this.reason))
        })
      }
    }
    try { executor(resolve, reject) } catch (err) { reject(err) }
  }
  then(onFulfilled, onRejected) {
    const defaultOnRejected = err => { throw err }
    onRejected = onRejected ?? defaultOnRejected;
    const defaultOnFulfilled = value => value;
    onFulfilled = onFulfilled ?? defaultOnFulfilled;
    return new TKPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled) this.onFulfilledFns.push(() => execFunctionWithCatchError(onFulfilled, this.value, resolve, reject))
        if (onRejected) this.onRejectedFns.push(() => execFunctionWithCatchError(onRejected, this.reason, resolve, reject))
      }
    })
  }
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }
  finally(onFinally) {
    this.then(() => onFinally(), () => onFinally())
  }
  static resolve(value) { return new TKPromise((resolve) => resolve()) }
  static reject(reason) { return new TKPromise((resolve, reject) => reject()) }
  static all(promises) {
    return new TKPromise((resolve, reject) => {
      const values = []
      promises.forEach(promise => {
        promise.then(res => {
          values.push(res);
          if (values.length === promises.length) resolve(values)
        }, err => reject(err))
      })
    })
  }
  static allSettled(promises) {
    return new TKPromise((resolve) => {
      const results = []
      promises.forEach(promise => {
        promise.then(res => {
          results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
          if (results.length === promises.length) resolve(results)
        }, err => {
          results.push({ status: PROMISE_STATUS_REJECTED, value: err })
          if (results.length === promises.length) resolve(results)
        })
      })
    })
  }
  static race(promises) {
    return new TKPromise((resolve, reject) => promises.forEach(promise => promise.then(resolve, reject)))
  }
  static any(promises) {
    const reasons = []
    return new TKPromise((resolve, reject) => {
      promises.forEach(promise => promise.then(resolve, err => {
        reasons.push(err);
        if (reasons.length === promises.length) reject(new AggregateError(reasons))
      }))
    })
  }
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("turnip", 1000))
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("kang"), 2000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("kkkk"), 3000)
})
// TKPromise.race([p1, p2, p3]).then(res => console.log("res:" + res)).catch(err => console.log("err:", err))
TKPromise.any([p1, p2, p3]).then(res => console.log("res:", res)).catch(err => console.log("err:", err.errors))