function foo() {
  return new Promise((resolve, reject) => {
    // resolve("success message")
    reject("failed message")
  })
}

const fooPromise = foo();
fooPromise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
});

//catch方法传入的回调函数，会在Promise执行reject后被回调
fooPromise.catch((err) => { console.log(err) });//看起来和上面的捕捉差不多


//传入的这个函数，被称为executor
//resolve:回调函数，在成功时，回调resolve函数
//reject：回调函数，在失败时，回调reject函数
const testPromise = new Promise((resolve, reject) => {
  console.log("Promise传入的函数被执行了")
  //一旦决议后续决议均无效
  resolve();
  reject();
})