const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (err) {
    reject(err)
  }
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
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value;
          this.onFulfilledFns.forEach(fn => fn(this.value))
        })
      }
    }
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns.forEach(fn => fn(this.reason))
        })
      }
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }

  }

  then(onFulfilled, onRejected) {
    const defaultOnRejected = err => { throw err };
    onRejected = onRejected || defaultOnRejected;
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
    this.then(undefined, onRejected)
  }
}

const promise = new TKPromise((resolve, reject) => {
  console.log("状态pending")
  resolve("turnip")
  reject("kang")
})
promise.then(res => console.log("res:", res)).catch(err => console.log("err:", err))