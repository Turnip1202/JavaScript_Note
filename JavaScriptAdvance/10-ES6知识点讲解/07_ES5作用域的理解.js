// 声明对象的字面量
var obj = {
  name: "turnip"
}

// ES5没有块级作用域
// 快代码（block code）
{
  // 声明一个变量
  var foo = "foo"
}

console.log(foo)

// ES5中只有两个东西会形成作用域
// 1,全局作用域
// 2,函数作用域

function foo() {
  var bar = "bar"
}

//函数上层作用域，无法直接访问函数内部
console.log(bar)

function foo() {
  function demo() { }
}