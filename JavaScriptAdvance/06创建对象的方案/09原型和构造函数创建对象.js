// 可以调用原型链上的方法，从而简化代码

function Person(name, age, height, address) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.address = address;
}

Person.prototype.eating = function () {
  console.log(this.name + "在吃东西~");
}
Person.prototype.running = function () {
  console.log(this.name + "在跑步~")
}

let p1 = new Person("turnip", 18, 1.88, "北京市");
let p2 = new Person("kobe", 28, 1.98, "洛杉矶")

p1.eating();
p2.eating();