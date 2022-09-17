//基于工厂模式创建对象（创建出来对象的类型不易区分）
function createPerson(name, age, address) {
  var o = new Object;
  o.name = name;
  o.age = age;
  o.address = address;
  o.getName = function () { return this.name; }
  return o;
}
var person = createPerson("turnip", 19, { name: "郑州市", code: 10086 })
console.log(person);

//基于构造函数模式创建对象
function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.getName = function () {
    return this.name;
  }
}
let person = new Person("turnip", 18, { name: "郑州市", code: 10086 })
console.log(person)
console.log(person instanceof Person);

//5.基于原型对象的模式
function Person() { }
//通过prototype属性添加属性和函数
Person.prototype.name = "kangx"
Person.prototype.age = 11;
Person.prototype.address = {
  name: "郑州市",
  code: 10086
}
Person.prototype.getName = function () {
  return this.name;
}
var person1 = new Person;
var person2 = new Person;
console.log(person1.name === person2.name);//true
console.log(person1.getName === person2.getName);//true


// 6.构造函数和原型混合的模式
//构造函数中定义实例的属性
function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}
//原型中添加实例共享的函数
Person.prototype.getName = function () { return this.name; }
//生成两个实例对象
var person1 = new Person("kang", 11, { name: "郑州市", code: 10086 })
var person2 = new Person("turnip", 12, { name: "周口市", code: 10010 });
console.log(person1.name)
console.log(person2.name)
//改变实例的属性值
person1.address.name = "昆明市"
person1.address.code = 10000;
console.log(person2.address.name)
console.log(person1.getName === person2.getName)
person2.name = "小明"
console.log(person1.getName())
console.log(person2.getName())


// 7.基于动态原型模式
function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  if (typeof Person._initialized === "undefined") {
    Person.prototype.getName = function () { return this.name; }
    Person._initialized = true;
  }
}
var person = new Person("turnip", 11, { name: "郑州市", code: 10000 })
var person1 = new Person("kang", 12, { name: "周口市", code: 10086 })
person.address.name = "北京市"
person.address.code = 1202
console.log(person1.address.name);
person1.name = "橘子"
console.log(person.getName())
console.log(person1.getName())
