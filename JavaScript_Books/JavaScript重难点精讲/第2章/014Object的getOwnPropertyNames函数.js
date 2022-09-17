function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.getName = function () {
    return this.name;
  }
}
Person.prototype.eat = function () {
  return "吃薯片";
}
let p = new Person;
console.log(Object.getOwnPropertyNames(p));//[ 'name', 'age', 'gender', 'getName']
