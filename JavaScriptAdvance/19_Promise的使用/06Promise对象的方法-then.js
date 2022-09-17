// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

const promise = new Promise((resolve, reject) => {
  resolve("turnip")
})
// 1,同一个Promise可以被多次调用then方法
//放我们的resolve方法被回调时，所有的then方法传入的回调函数都会被调用
promise.then(res => {
  console.log("res1:", res)
})
promise.then(res => {
  console.log("res2:", res)
});

promise.then(res => {
  console.log("res3", res)
})

// 2.then方法传入的"回调函数：可以有返回值"
//then方法本身也可以有返回值，它的返回值是Promise


// 1>如果我们返回的是一个普通纸（数值/字符串/普通对象/undefined）,
//   那么这个普通值将被作为一个新的Promise的resolve的值
promise.then(res => {
  return "turnip"
}).then(res => {
  console.log("res:", res)
  return "kang"
}).then(res => console.log(res))

// 2>如果我们返回的是一个Promise
promise.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("kkkk")
    }, 3000)
  })
}).then(res => {
  console.log("res:", res)
})

// 3>如果返回的是一个对象，并且该对象实现了thenable
promise.then(res => {
  return {
    then(resolve, reject) { resolve("ttt") }
  }
}).then(res => console.log("res:", res))