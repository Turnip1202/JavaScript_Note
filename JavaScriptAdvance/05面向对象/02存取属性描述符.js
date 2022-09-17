// 存取属性描述符
// 存取属性描述符和数据属性描述符的区别：
//存取属性描述符定义一个属性，该属性的调用可以存取和读取当前对象其他属性的数据
//数据属性描述符定义只可以存取数据、读取数据的对象

var obj = { name: "kang" };

Object.defineProperty(obj, "turnip", {
  enumerable: true,
  configurable: true,
  get: function () {
    console.log("获取数据的值");
    return this.name
  },
  set: function (val) {
    console.log("属性设置成功")
    this.name = val;
  }
})

console.log(obj.turnip)
obj.turnip = "tao"
console.log(obj.turnip)