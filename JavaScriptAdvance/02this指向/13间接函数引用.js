// 总结：无论函数怎么引用，this就是找执行时的所属。当然，也有一些黑盒子

var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this)
  }
}
var obj2 = {
  name: "obj2"
};//此时这里的分号必不可少，因为下面是个表达式
(obj2.bar = obj1.foo)();//全局

obj2.bar = obj1.foo;
obj2.bar();

