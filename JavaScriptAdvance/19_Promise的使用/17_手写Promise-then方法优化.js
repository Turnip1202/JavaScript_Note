const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

class TKPromise {
  constructor(exector) {
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
          this.onFulfilledFns.forEach(fn => {
            fn(this.value)
          })
        })
      }
    }
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason;
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }
    exector(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) onFulfilled(this.value)
    if (this.status === PROMISE_STATUS_REJECTED && onRejected) onRejected(this.reason)
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled)
      this.onRejectedFns.push(onRejected)
    }
  }
}


const promise = new TKPromise((resolve, reject) => {
  console.log("状态pending")
  resolve("kang")
  reject("turnip")
})

promise.then(res => console.log("res1:", res), err => console.log("err:", err))
promise.then(res => console.log("res2:", res), err => console.log("err2", err))
setTimeout(() => {
  promise.then(res => console.log("res3", res), err => console.log("err3:", err))
}, 1000)