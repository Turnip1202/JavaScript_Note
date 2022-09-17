//优化log
Object.prototype.log = function () {
  let val = this.valueOf();
  console.log(val);
}
// var a = new String('abc');
// console.log(typeof a);//object
// console.log(a instanceof String);//true
// console.log(Object.prototype.toString.call(a));//[Object String]


// //内部属性
// console.log(Object.prototype.toString.call([1, 2, 3]));//[object Array]
// console.log(Object.prototype.toString.call(/regex-literal/i));//[object RegExp]
// console.log(Object.prototype.toString.call(null));//[object Null]
// console.log(Object.prototype.toString.call(undefined));//[object Undefined]

// // 基本数据类型会被包装
// console.log(Object.prototype.toString.call('abc'));//[object String]
// console.log(Object.prototype.toString.call(42));//[object Number]
// console.log(Object.prototype.toString.call(true));//[object Boolean]

// //JavaScript会自动为基本数据类型值进行包装一个封装对象
// var a = 'abc';
// console.log(a.length);
// console.log(a.toUpperCase());


//封装对象释疑
var a = new Boolean(false);
if (!a) {
  console.log('Oops');//执行不到这里。因为a此时成了一个对象
}


// //自行封装基本数据类型
// var a = "abc";
// var b = new String(a);
// var c = Object(a);
// console.log(typeof a);//string
// console.log(typeof b);//object
// console.log(typeof c);//object
// console.log(b instanceof String);//true
// console.log(c instanceof String);//true
// console.log(Object.prototype.toString.call(b));//[object String]
// console.log(Object.prototype.toString.call(c));//[object String]


// //拆封
// var a = new String("abc");
// var b = new Number(42);
// var c = new Boolean(true);
// console.log(a.valueOf());//'abc'
// console.log(b.valueOf());//42
// console.log(c.valueOf());//true
// //隐式拆封
// //需要用到封装后的基本类型的值地方，js引擎会隐式拆封
// var a = new String('abc');
// var b = a + "";
// console.log(b);//abc
// console.log(typeof a);//object
// console.log(typeof b);//string


// //原生函数族构造函数
// var a = new Array(1, 2, 3);
// var c = Array(1, 2, 3);//new关键字不带，会自动补上
// console.log(a, c);
// var b = [1, 2, 3];
// console.log(b);



//空单元数组
// var a = new Array(3);
// var b = [undefined, undefined, undefined];
// var c = [];
// console.log(a, b, c);
// console.log(a.join("-"));//--
// console.log(b.join("-"));//--
// console.log(c.join("-"))//""
// console.log(a.map((v, i) => i));//返回三个空单元，因为map无从遍历
// console.log(b.map((v, i) => i));//这里返回的是数组的下标
// b.map((v, i) => i).log();//这里返回的是数组的下标
// a.join("-").log();//--

// //手写join
// function fakeJoin(arr, connector) {
//   var str = "";
//   for (var i = 0; i < arr.length; i++) {
//     if (i > 0) str += connector;
//     if (arr[i] !== undefined) str += arr[i];
//   }
//   return str;
// }
// // console.log(fakeJoin(a, "-"));
// fakeJoin(a, "-").log();


// var a = Array.apply(null, { length: 3 });
// //apply内部对对length属性进行遍历，返回一个数组，但并没有这个数组
// a.log();



// var e = new Function("a", "return a * 2;");
// var f = function (a) { return a * 2; };
// function g(a) { return a * 2; };
// console.log(e);


//手写Date.now()
if (!Date.now) {
  Date.now = function () {
    return (new Date()).getTime();
  }
}



// var mysym = Symbol("my own symbol");//不可以用new关键字
// mysym.log();
// mysym.toString().log();
// var a = {};
// a[mysym] = 'foobar';
// Object.getOwnPropertySymbols(a).log();

console.log(Function.prototype());//undefined
RegExp.prototype.toString().log();///(?:)/
console.log(RegExp.prototype)