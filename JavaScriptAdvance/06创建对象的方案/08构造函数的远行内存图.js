function Person() {

}

let p1 = new Person();
let p2 = new Person();

//均为true
console.log(p1.__proto__ === Person.prototype)
console.log(p2.__proto__ === Person.prototype)



// p1.name = "turnip";
p1.__proto__.name = "kobe";
Person.prototype.name = "james";
console.log(p1.name)
