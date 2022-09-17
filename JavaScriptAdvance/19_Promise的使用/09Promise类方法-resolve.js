// 转成Promise对象
function foo() {
  const obj = { name: "turnip" }
  return new Promise((resolve) => {
    resolve(obj)
  })
}
foo().then(res => {
  console.log("res:", res)
})

// 类方法Promise.resolve
// 1,普通的值
const promise = Promise.reject({ name: "turnip" });
//相当于
const promise1 = new Promise((resolve, reject) => {
  resolve({ name: "宋慧敏" })
})

// 2，传入Promise
const promise2 = Promise.resolve(new Promise((rel, rej) => {
  rel("kkkk");
}))


promise2.then(res => {
  console.log("res:", res)
})

// 3,传入thenable对象
