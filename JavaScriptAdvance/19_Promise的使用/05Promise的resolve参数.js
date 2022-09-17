/**
 * resolve（参数）
 * 1>普通的值或者对象  
 * 2>传入一个Promise
 *  那么当前的Promise的状态会由传入的Promise来决定
 *  相当于进行了状态移交
 * 3>传入一个对象，并且这个对象有实现then方法（并且这个对象是实现了thenable接口）
 *   那么也会执行该then方法，并且又由该then方法决定后续状态
 */
// 1,promise的特殊情况
const newPromise = new Promise((resolve, reject) => {
  resolve("turnip");
  reject("err message");
});

newPromise.then(res => {
  console.log(res)
});


new Promise((resolve, reject) => {
  //pending -> fulfilled
  resolve(newPromise);
}).then(res => {
  console.log("res:", res)
}, err => {
  console.log("err:", err)
});


// 2.传入一个对象，这个对象有then方法

new Promise((resolve, reject) => {
  // pending -> fulfilled
  const obj = {
    then(resolve, reject) {
      // resolve("resolve message")
      reject("reject message")
    }
  }
  resolve(obj)
}).then(res => {
  console.log("res:", res)
}, err => {
  console.log("err:", err)
})




//eatable/runable
const obj = {
  eat() { },
  run() { }
}