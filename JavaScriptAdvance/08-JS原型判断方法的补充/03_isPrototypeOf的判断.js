function Person() { }

let p = new Person


console.log(p instanceof Person); //true


//调用对象上的方法
// Person.prototype是一个对象
console.log(Person.prototype.isPrototypeOf(p));//true

let obj = {
  name: "turnip",
  age: 18
}
let info = Object.create(obj);


// instanceof是用来判断构造函数的
// console.log(info instanceof obj)
console.log(obj.isPrototypeOf(info));//true
