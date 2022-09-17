//函数的声明
function sum(a, b) {
  return a + b;
}
//函数表达式(匿名函数表达式)
let fn1 = function (a, b,) {
  return a + b;
}
//具名函数表达式
let fn2 = function S(a, b) {
  return a + b;
}

//Function构造函数(比较消耗性能)
const add = new Function("a", "b", "return a+b;")
console.log(add(1, 2))
//Function构造的函数，将一直作为顶级函数执行，即函数的上层作用域永远为全局作用域
//node环境不一致
var y = "global";//全局环境定义的y值
function constructFunction() {
  var y = "local";
  return new Function("return y");//无法获取局部定义的变量
}
console.log(constructFunction()());


//函数递归(斐波那契数列)
function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
console.log(fibonacci(6))
//函数表达式实现
let fibonacci = function s(num) {
  if (num === 1 || num === 2) return 1;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
console.log(fibonacci(6))
// console.log(s(6));//ReferenceError: s is not defined

//使用函数构造块级作用域
let person = (function () {
  let _name = "";
  return {
    getName: function () {
      return _name;
    },
    setName: function (val) {
      _name = val
    }
  }
}())
person.setName("turnip")
console.log(person.getName());


//方法调用之连续函数调用
let obj = {
  name: "turnip",
  getName: function () {
    console.log(this.name)
  },
  setName: function (val) {
    this.name = val;
    return this;//在函数内部返回函数对象本身
  }
}
obj.setName("kang").getName()

// call/apply
function sum1(num1, num2) {
  return num1 + num2;
}
let person1 = {}
let r1 = sum1.call(person1, 1, 2)
let r2 = sum1.apply(person1, [1, 2])
console.log(r1, r2);

//匿名函数的一些写法
(function sum() { console.log("turnip") })(1, 2);
let s = function () { console.log("turnip") }(1, 2);
(function () { console.log("turnip") }(1, 2));

//自执行函数
let aa = function (x) { console.log(x) }(1);
true && function (x) { console.log(x) }(2);
0, function (x) { console.log(x) }(3);
!function (x) { console.log(x) }(4);
~function (x) { console.log(x) }(5);
-function (x) { console.log(x) }(6);
+function (x) { console.log(x) }(7);
new function (x) { console.log(x) }(8);
new function () { console.log(9) };

//argument的一些操作
function foo(a, b, c) {
  console.log(arguments.length);//函数调用的时候就已经确定 3
  arguments[0] = 11;
  console.log(a);//11
  b = 12;
  console.log(arguments[1]);//12
  arguments[2] = 3;
  console.log(c);//undefined
  c = 13;//不会影响arguments
  console.log(arguments[2]);//3
  console.log(arguments.length);
}
foo(1, 2);
function foo() {
  console.log(arguments.callee === foo);
}
foo();//true

//arguments在匿名的递归函数的使用
function create() {
  return function (n) {
    if (n <= 1) return 1;
    return n * arguments.callee(n - 1)
  }
}
let result3 = create()(5);
console.log(result3);

// arguments.callee会改变函数的this
let sillyFunctin = function (recursed) {
  if (!recursed) {
    console.log(this);
    return arguments.callee(true);
  }
  console.log(this);
}
sillyFunctin();

//分隔符分割后续参数
function joinStr(seperator) {
  let strArr = Array.prototype.slice.call(arguments, 1);//第一个参数为分隔符
  return strArr.join(seperator)
}
let str = joinStr("-", "orange", "apple", "banana");
console.log(str);

//模拟函数重载
function sum() {
  let arr = Array.prototype.splice.call(arguments)
  return arr.reduce((pre, cur) => pre + cur, 0)
}
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);
