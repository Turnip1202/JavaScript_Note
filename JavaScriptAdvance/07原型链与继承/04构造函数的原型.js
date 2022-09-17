function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.running = function () {
  console.log(this.name + "running")
}

let p1 = new Person("turnip", 19)
console.log(p1.valueOf())
console.log(p1.toString())


console.log(Person.prototype);
console.log(Object.getOwnPropertyDescriptors(Person.prototype));//有一个不可枚举的constructor属性


console.log(Person.prototype.__proto__);//指向[Object: null prototype] {}
console.log(Person.prototype.__proto__.__proto__);//null





