// ES6 ES2015
//https://promisesaplus.com/
const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"
class TKPromise {
  constructor(exector) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        queueMicrotask(() => {
          this.value = value;
          this.onFulfilled(this.value);
        })
      }
    }
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = reason;
          this.onRejected(this.reason)
        })
      }
    }
    exector(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }
}

const promise = new TKPromise((resolve, reject) => {
  console.log("状态pending")
  reject("kang")
  resolve("turnip")
})
promise.then(res => {
  console.log("res1:", res)
}, err => {
  console.log("err:", err)
})

