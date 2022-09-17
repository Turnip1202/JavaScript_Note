//类的声明
class Person { }


//类的表达式
let Animal = class {

}

// 类的特性
console.log(Person.prototype);//指向class Person
console.log(Person.prototype.__proto__);//指向Object

console.log(Person.prototype.constructor);//class Person

console.log(typeof Person);//function
let p = new Person();
console.log(p.__proto__ === Person.prototype);//true