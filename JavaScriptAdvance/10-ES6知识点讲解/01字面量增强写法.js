let name = "turnip";
let age = 19;


let obj = {
  // 1,property shorthand(属性的简写)
  name,
  age,

  // 2,method shorthand(方法的简写)
  foo: function () {
    console.log(this)
  },
  bar() {
    console.log(this)
  },
  baz: () => {
    console.log(this)
  },
  // 3computed property name(计算属性名)
  [name + 123]: "turnip"
}
obj.foo();//当前对象obj
obj.bar();//当前对象obj
obj.baz();//全局对象
// obj[name + 123] = "turnip"
console.log(obj)