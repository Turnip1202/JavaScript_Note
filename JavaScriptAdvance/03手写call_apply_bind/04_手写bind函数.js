Function.prototype.tkbind = function (thisArg, ...argArray) {
  // bind函数的思路：绑定this，并返回一个函数
  // 1.获取要调用的函数
  // 2.将thisArg转换为对象
  // 3.将参数合并
  // 4.返回一个函数



  // 1.获取到要调用的函数
  var fn = this;

  // 2.将thisArg转换为对象
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis;

  // 3.使用柯里化操作将参数合并
  function proxyFn(...args) {
    thisArg.fn = fn;//使用隐式转换
    //将参数合并
    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  }

  // 4.返回函数
  return proxyFn;

}


function foo() {
  console.log("foo被执行", this);
  return 20;
}
function sum(num1, num2, num3) {
  console.log(num1, num2, num3);
  return { num1, num2, num3 }
}

var bar = foo.tkbind("turnip")
var result = bar();
console.log(result);

var newSum = sum.tkbind("turnip", 10, 20);
var result = newSum(30);
console.log(result)
