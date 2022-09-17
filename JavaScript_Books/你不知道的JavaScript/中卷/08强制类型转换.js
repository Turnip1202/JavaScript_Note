//优化log
Object.prototype.log = function () {
  let val = this.valueOf();
  console.log(val);
}

// //极大极小值的toString
// let a = 1.07 * 1000 * 1000 * 1000 * 10000 * 1000 * 1000 * 1000;
// a.toString().log();//1.07e+22


//数组的toString
// let a = [1, 2, 3];
// a.toString().log();//1,2,3 toString内部会遍历数组

// JSON.stringify(42).log();//"42"
// JSON.stringify("42").log();//""42""
// JSON.stringify(null).log();//"null"
// JSON.stringify(true).log();//"true"

// console.log(JSON.stringify(undefined));
// console.log(JSON.stringify(function () { }));
// console.log(JSON.stringify([1, undefined, function () { }, 4]));
// console.log(JSON.stringify({ a: 2, b: () => { } }));

// JSON的安全处理
// var o = {};
// var a = {
//   b: 42,
//   c: o,
//   d: function () { }
// }
// o.e = a;//创建循环引用
// // JSON.stringify(a);//会出错
// //自定义JSON序列化
// a.toJSON = function () {//toJSON应该返回一个能够被字符串化的安全JSON值，而不是返回一个JSON字符串
//   //序列化只包含b
//   return { b: this.b };
// }
// JSON.stringify(a).log();

//例如
// var a = {
//   val: [1, 2, 3],
//   toJSON: function () {
//     return this.val.slice(1);
//   }
// };
// var b = {
//   val: [1, 2, 3],
//   toJSON: function () {
//     return `[${this.val.slice(1).join()}]`
//   }
// }
// JSON.stringify(a).log();
// JSON.stringify(b).log();


// var a = {
//   b: 42, c: "42", d: [1, 2, 3]
// }
// //第二个参数是个数组，则数组内必须为所要序列化对象的键，且数组必须是纯字符串数组
// JSON.stringify(a, ["b", "c"]).log();
// JSON.stringify(a, (k, v) => { if (k !== "c") return v; }, 3).log();//函数返回undefined就会忽略此次的值
// JSON.stringify(a, null, 3).log();//是数字的话就是缩进的字符数，是字符串则是用字符串缩进


//ToNumber
// var a = {
//   valueOf: function () {
//     return "42";
//   }
// }
// var b = {
//   toString: function () {
//     return "42";
//   }
// }
// var c = [4, 2];
// c.toString = function () {
//   return this.join("");
// }
// Number(a).log();
// Number(b).log();
// Number(c).log();
// Number("").log();
// Number([]).log();
// Number(["abc"]).log();


// Boolean
// var a = new Boolean(false);
// var b = new Number(0);
// var c = new String("");
// var d = Boolean(a && b && c)
// d.log();
// a.log();
// console.log(d = a && b && c);//[String:""]
// var a = {
//   num: 21,
//   toString: function () {
//     return String(this.num * 2);
//   }
// }
// parseInt(a).log();//42


// var a = [1, function () { }, 2, function () { }]
// let b = JSON.stringify(a, function (key, val) {
//   if (typeof val == "function") {
//     return !!val;
//   }
//   else {
//     return val;
//   }
// });
// console.log(b)

// let a = {
//   valueOf: function () { return 42; },
//   toString: function () { return 4 }
// };

// (a + '').log();
// String(a).log();


// function onlyOne(a, b, c) {
//   return !!((a && !b && !c) || (!a && b && !c) || (!a && !b && c));

// }

// var a = true;
// var b = false;
// onlyOne(a, b, b).log();//true
// onlyOne(b, a, b).log();//true
// onlyOne(a, b, a).log();//false

// //多参数版
// function onlyOne() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     //跳过假值
//     if (arguments[i]) {
//       sum += arguments[i]
//     }
//   }
//   return sum == 1;
// }

// var a = true;
// var b = false;
// onlyOne(b, a).log();//true
// onlyOne(b, a, b, b, b, b).log();//true
// onlyOne(b, b).log();//false
// onlyOne(b, a, b, b, b, a).log();//false

// //显式强制类型转换
// function onlyOne() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     //跳过假值
//     sum += Number(!!arguments[i])
//   }
//   return sum === 1;
// }


// function foo(a, b) {
//   a = a || "hello"
//   b = b || "world"
//   console.log(a + " " + b);
// }
// foo();//hello world
// foo('turnip', 'kang');//turnip kang
// foo('turnip', '');//turnip world



//奇技淫巧1
// function foo() {
//   console.log(a);
// }
// var a = 42;
// a && foo();

// // Symbol;注意：任何时候不可以强转为数字。可以转换为boolean：true
// var s1 = Symbol("cool");
// String(s1).log();//"Symbol(cool)
// console.log(s1 + "");//报错


//奇技淫巧2
var a = doSomething();
if (a == null) {//仅有doSomething返回null和undefined时，才成立 

}