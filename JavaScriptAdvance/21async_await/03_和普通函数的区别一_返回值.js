async function foo() {
  console.log("foo fucntion start~")
  console.log("中间代码")
  console.log("foo function end~")
  // 1,返回一个值
  // 2,返回thenable
  // return {
  //   then(resolve, reject) {
  //     resolve("turnip")
  //   }
  // }

  // 3,返回Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("kang"), 2000)
  })
}

//异步函数的返回值一定是一个Promise
const promise = foo();
promise.then(res =>
  console.log("promise then function exec:", res)
)