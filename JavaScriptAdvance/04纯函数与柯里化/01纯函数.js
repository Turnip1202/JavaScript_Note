//纯函数可以让函数如同一个工厂，加工产品
//1.相同的输入一定产生相同的输出
// 2.在执行过程中不会产生副作用
function foo(num1, num2) {//纯函数
  return num1 * 2 + num2 * num2;
}

var nam = "abc";
function bar() {//不是纯函数，修改了nam的值
  console.log("bar的其他代码")
  nam = "turnip"
}
bar();
console.log(nam);


function baz(info) {
  info.age = 18;
}
var obj = { name: "turnip", age: 100 }
baz(obj);
console.log(obj)
