//当前foo函数,在被其他地方调用时，没有任何的参数校验
// 1，没有对类型进行校验
// 2，没有对是否传入参数进行校验
function foo(message) {
  if (message) {
    console.log(message.length);
  }
}
foo(123);
foo()
//永远执行不到这里
console.log("渲染界面的成千上万的JavaScript代码")
//定义变量
let bar = "abc"
bar = 123;
bar.length;
