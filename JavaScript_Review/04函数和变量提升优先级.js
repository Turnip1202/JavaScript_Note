console.log(x);//函数体
function x() { 
  x = 20;
};
console.log(x);//函数体
var x = 10;
console.log(x);//10
x();//报错
console.log(x);
//先提升变量，后提升函数，即函数的提升在变量的下方
var f = function () { y = 20; };//函数表达式不会被提升