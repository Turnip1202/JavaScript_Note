function foo() { 
  var x = 3;
  return function () { 
    x++;
    return x;
  }
}
var bar = foo();
console.log(bar());
console.log(bar());
console.log(bar());
console.log(bar());
//返回的函数仍然持有着foo内部的x，返回出去之后，持有权给了外部的bar，从而，GC无法判断x是否被使用完成