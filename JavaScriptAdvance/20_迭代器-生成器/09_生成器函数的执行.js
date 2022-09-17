//当遇到yield时，会暂停函数的执行
//当遇到return时，生成器就会停止执行
function* foo() {
  console.log("函数开始执行~")
  const value1 = 100
  console.log("第一段代码:", value1)
  yield value1;//会作为next函数的返回值
  const value2 = 200;
  console.log("第二段代码：", value2);
  yield value2;
  const value3 = 300;
  console.log("第三段代码：", value3);
  yield value3;
  console.log("函数执行结束~");
  return "turnip"
}
const generator = foo();
console.log("返回值1:", generator.next())
console.log("返回值2:", generator.next())
console.log("返回值3:", generator.next());
console.log("返回值4:", generator.next())
console.log("返回值5:", generator.next())