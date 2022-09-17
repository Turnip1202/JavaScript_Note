const promise = Promise.reject("rejected message")
promise.catch(err => console.log(err))
// 相当于
const promise2 = new Promise((resolve, reject) => {
  reject("rejected message")
})
promise2.catch(err => console.log(err))


// //注意：无论传入什么值都是一样的
const promise1 = Promise.reject(new Promise(() => { }))
promise1.then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err)
})
