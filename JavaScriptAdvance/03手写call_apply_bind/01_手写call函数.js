Function.prototype.tkcall = function (thisArg, ...args) {//这里使用剩余参数，将参数保存在args数组内
  // 步骤：1.获取需要被执行的函数
  //      2.将thisArg转化为对象类型（防止传入非对象类型）
  //      3.执行函数时将this绑定到thisArg
  //      4.将函数执行结果返回



  //1.获取被执行的函数
  var fn = this;//这里是为了使用隐式绑定，将其绑定到thisArg上

  //2.将thisArg转化为对象类型（防止传入非对象类型）
  //普通数据非对象类型，使用Object将其转换为对应对象
  //传入null或undefined时，将其绑定到window上
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis;

  // 3.执行函数时将this绑定到thisArg
  thisArg.fn = fn;
  var result = thisArg.fn(...args);//这里使用拓展运算符，将args解构
  delete thisArg.fn;

  // 4.将最终的结果返回
  return result;

}

function foo() {
  console.log("foo函数被执行", this)
}
function sum(num1, num2) {
  console.log("sum函数被执行", this, num1, num2);
  return num1 + num2;

}

foo.tkcall(undefined);
var result = sum.tkcall("turnip", 20, 30);
console.log("tkcall的调用", result);