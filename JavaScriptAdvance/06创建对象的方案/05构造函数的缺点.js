//构造函数每次执行都会创建新的函数对象，属实没有必要

function foo() {
  return function () {

  }
}

var fn1 = foo();
var fn2 = foo();
console.log(fn1 === fn2);