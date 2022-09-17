const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfiled"
const PROMISE_STATUS_REJECTED = "rejected"
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const resolt = execFn(value)
    resolve(resolt)
  } catch (err) {
    reject(err)
  }
}


class TKPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined
    this.reason = undefined;
    this.onFulfilledFns = []
    this.onRejectedFns = []
    const resolve = (value) => {

      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) {
            this.status = PROMISE_STATUS_FULFILLED
            this.value = value;
            this.onFulfilledFns.forEach(fn => {
              fn(this.value)
            })
          }
        })
      }
    }
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
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
    return new TKPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      if (this.status === PROMISE_STATUS_REJECTED) execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => execFunctionWithCatchError(onFulfilled, this.value, resolve, reject))
        this.onRejectedFns.push(() => execFunctionWithCatchError(onRejected, this.reason, resolve, reject))
      }
      console.log(this.status)
    });
  }

}


const promise = new TKPromise((resolve, reject) => {
  console.log("状态pending")
  reject("kang")
})

promise.then(res => {
  console.log("res1:", res)
}, err => {
  console.log("err1", err)
}).then((res) => { console.log("res2:", res) },
  err => { console.log("err2:", err) })

