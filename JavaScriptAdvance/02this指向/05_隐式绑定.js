//总结：
//1,隐式绑定可以看成是this向上查找函数属于的对象


//隐式绑定object.fn()
//object对象会被js引擎绑定到fn函数的this里面

function foo() {
  console.log(this)
}
//独立函数调用
// foo()


//案例一：
// var obj = {
//   name: "turnip",
//   foo: foo
// }
// obj.foo();//obj对象


//案例二
// var obj = {
//   name: "turnip",
//   eating: function () {
//     console.log(this.name + "在吃东西")
//   },
//   running: function () {
//     console.log(obj.name + "在跑步")
//   }
// };
// obj.eating();//隐式绑定
// obj.running();//隐式绑定
// var fn = obj.eating;
// fn();//默认绑定



//案例三
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this)
  },
};
var obj2 = {
  name: "obj2",
  bar: obj1.foo
}
obj2.bar();//obj2