const promise = new Promise((resolve, reject) => {
  reject("reject message")
})

promise.then(res => {
  console.log("res:", res)
}).catch(err => { console.log("err:", err) })
  .finally(() => {
    //最后均会执行这个
    console.log("finally code execute")
  })