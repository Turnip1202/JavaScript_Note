
// 柯里化函数
function app(x) { 
  return function (y) {
    return x + y;
   }
}
console.log(app(1)(2));
