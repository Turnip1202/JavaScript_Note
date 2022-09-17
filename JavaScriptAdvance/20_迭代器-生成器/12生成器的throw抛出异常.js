function* foo() {
  console.log("代码开始执行")
  const value1 = 100;
  try {
    yield value1;
  } catch (err) {//可以省略括号
    console.log("异常：", err)
    yield "turnip";//可以正常执行
  }
  console.log("第二段代码继续执行")
  const value2 = 200;
  yield value2
  console.log("代码执行结束")
}
const generator = foo();
const result = generator.next();
generator.throw("error message")
generator.next();