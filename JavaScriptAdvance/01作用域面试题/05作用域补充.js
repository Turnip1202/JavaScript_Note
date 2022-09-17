function foo() { 
  var m = 100;//创建AO对象，包含m
}
foo();//执行后，便销毁了AO对象，销毁了函数执行上下文
console.log(m);

// function foo() { 
//  m = 100;//创建AO对象，包含m
// }
// foo();//执行后，便销毁了AO对象，销毁了函数执行上下文
// console.log(m);//100