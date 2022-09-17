//1，数组
let array = [1, 2, 3];
array.name = "Array";
console.log(array.propertyIsEnumerable('name'));//true:name属性为实例属性
console.log(array.propertyIsEnumerable('join'));//false:join()函数继承自Array类型
console.log(array.propertyIsEnumerable('length'));//false:length属性继承自Array类型
console.log(array.propertyIsEnumerable('toString'));//false:toString函数继承自Object
//2,自定义对象
let Student = function (name) { this.name = name; return undefined; }
//定义一个原型函数
Student.prototype.sayHello = function () {
  console.log("Hello" + this.name)
}

let a = new Student('tom')
console.log(a.propertyIsEnumerable('name'));//true:name为自定义属性的实例对象
console.log(a.propertyIsEnumerable('age'));//false:age属性不存在，返回false
console.log(a.propertyIsEnumerable('sayHello'));//false:sayHello属于原型函数
Object.defineProperty(a, 'name', {
  enumerable: false
})
console.log(a.propertyIsEnumerable('name'));//false:name设置为不可枚举
