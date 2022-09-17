//this指向什么，跟函数所处的位置是没有关系的，
//跟函数被调用的方式有关系
// 不必想的过于复杂，JavaScript中的this可以理解为就是在找函数执行时的所属对象。
//四条规则对于this的查找进行了限制。
function foo() {
  console.log(this);
};
// foo();
//Node中函数的直接调用指向Object [global]
//因此在Node中函数是在Object [global]下调用的

//浏览器中函数的直接调用指向window
//即全局对象和window是一样的



let obj = {
  name: "turnip",
  foo: foo
}

obj.foo();//这里是this的隐式绑定到obj

foo.apply("turnip");//这里显式绑定到"turnip"上