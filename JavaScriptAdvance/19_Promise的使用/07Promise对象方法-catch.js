const promise = new Promise((resolve, reject) => {
  resolve();
  // reject("rejected1 status");//先执行
  // console.log("aaa")
  // throw new Error("rejected2 status")
})

// // 1,当executor抛出异常时，也会调用错误（拒绝）捕获的回到函数
// promise.then(undefined, err => console.log("err:", err));
// // 2,通过catch方法来传入错误（拒绝）捕捉的回调函数
// // Promise/a+规范
// promise.catch(err => {
//   console.log("err", err)
// })
// promise.then(res => {
//   // return new Promise((resolve, reject) => {
//   //   reject("then tejected status")
//   // })
//   throw new Error("error message")
// }).catch(err => {
//   console.log("err1", err)
// })


// 3,拒绝捕获的问题
promise.then(res => { }, err => {
  console.log("err1", err)
})

const promise1 = new Promise((resolve, reject) => {
  reject("kkkk")
}).catch(err => console.log(err))


promise1.then(res => undefined).then(res => { throw new Error("then error message") })
  .catch(err => console.log("err", err))

promise1.catch(err => console.log(err));//这里只捕捉promise1的错误（拒绝）

// 4，catch方法的返回值
const promsie2 = new Promise((resolve, reject) => {
  reject("kkk")
})

promsie2.then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err)
  return "catch return value"
})
  .then(res => {
    console.log("res recult :", res)
  })
  .catch(err => {
    console.log("err result:", err)
  })
