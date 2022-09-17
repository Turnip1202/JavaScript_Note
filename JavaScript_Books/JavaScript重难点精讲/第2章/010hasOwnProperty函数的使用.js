// 1,Object
let o = new Object;
o.name = "自定义属性";//定义一个实例属性
console.log(o.hasOwnProperty("name"));//true:name属性为实例o自己定义的，而非继承
console.log(o.hasOwnProperty("toString"));//false: toString为继承属性
// 2.自定义属性
let Student = function (name) { this.name = name }
//给Student的原型添加一个sayHello()函数
Student.prototype.sayHello = function () { console.log('Hello' + this.name) }
//给Student的原型添加一个age属性
Student.prototype.age = "18"
let st = new Student("张三");//初始化st
console.log(st.hasOwnProperty("name"));//true:调用构造函数时，通过this.name附加到实例对象上
console.log(st.hasOwnProperty('sayHello'));//false:sayHello函数为原型上的成员
console.log(st.hasOwnProperty('age'));//false: age属性为原型上的成员

