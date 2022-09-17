async function foo() {
  console.log("foo fucntion start~")
  console.log("中间代码~")
  //异步函数中的异常，会被作为异步函数返回的Promise的reject值
  throw new Error("error message")
  console.log("foo funtion end~")
}
foo().catch(err =>
  console.log("turnip err:", err)
)
console.log("后续还有代码---")