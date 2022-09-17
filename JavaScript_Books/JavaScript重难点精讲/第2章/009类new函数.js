function Cat(name, age) {
  this.name = name;
  this.age = age
}
Cat.prototype.sayHi = function () {
  console.log("hi")
}


function New() {
  let obj = {}
  Object.setPrototypeOf(obj, Cat.prototype); 
  let res = Cat.apply(obj, arguments)
  return typeof res === "Obj" ? res : obj
}
console.log(New("mimi", 18).sayHi())