//默认绑定：独立函数调用

/*总结：默认绑定就是函数执行时，this会去找当前函数属于的对象，
*类似于变量查找，会沿着原型链向上查找
*倘若找不到，就默认绑定到全局
**/

//案例一：
function foo() {
  console.log(this)
}
//在浏览器内，this默认绑定在window上
//在Node上，this默认绑定到Object [global]
foo();


//案例二：
//均可以看作是独立函数调用
function foo1() {
  console.log(this);
};
function foo2() {
  console.log(this)
  foo1();
}
function foo3() {
  console.log(this);
  foo2();
}
foo3();

// 案例三
var obj = {
  name: "turnip",
  foo: function () {
    console.log(this)
  }
}
var bar = obj.foo;
//Browser:window
// Node:Object [global]
bar();


// 案例四
function foo() {
  console.log(this);
}
var obj = {
  name: "turnip",
  foo: foo
}
var bar = obj.foo;
//Browser:window
//Node:Object [global]
bar();


// 案例五
function foo() {
  console.log(this);
  function bar() {
    console.log(this);
  }
  return bar;
}
var fn = foo()
//Browser:window
//Node:Object [global]
fn();

var obj = {
  name: "turnip",
  eating: fn
}
obj.eating();//隐式绑定


