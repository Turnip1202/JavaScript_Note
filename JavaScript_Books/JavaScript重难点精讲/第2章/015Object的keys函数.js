let obj = {
  name: "turnip",
  age: 22,
  sayHello: function () {
    console.log("Hello" + this.name)
  }
}
// (1)getOwnPropertyNames函数与keys函数区别在于keys只返回可枚举属性
console.log(Object.getOwnPropertyNames(obj));//[ 'name', 'age', 'sayHello' ]
console.log(Object.keys(obj));//[ 'name', 'age', 'sayHello' ]

//设置对象不可枚举属性
Object.defineProperty(obj, "name", {
  enumerable: false
})
console.log(Object.keys(obj));//[ 'age', 'sayHello' ]
console.log(Object.getOwnPropertyNames(obj));//[ 'name', 'age', 'sayHello' ]