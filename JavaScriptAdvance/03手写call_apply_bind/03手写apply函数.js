// 手写apply函数
Function.prototype.tkapply = function (thisArg, argArray) {
  //步骤：1.获取需要执行的函数
  //     2.将thisArg转换为对象
  //     3.将this绑定到该函数，并执行该函数
  //     4.返回执行结果


  // 1.获取需要执行的函数
  var fn = this;//该this通过隐式绑定指向函数

  // 2.将thisArg转换为对象
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis;

  // 3.将this绑定到该函数，并执行该函数
  thisArg.fn = fn;
  argArray = argArray || [];//将argArray整成一个数组
  var result = thisArg.fn(...argArray);
  delete thisArg.fn;

  // 4.将结果返回
  return result;
}


//测试
function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2)
  return num1 + num2;
}
function foo(num) {
  return num;
}
function bar() {
  console.log("bar被执行", this)
}

var result1 = sum.tkapply("turnip", [20, 30]);
console.log(result1);

var result2 = foo.tkapply("turnip", [20, 30]);
console.log(result2);

// edge test
bar.tkapply(0)



