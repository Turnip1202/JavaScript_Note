


//我们通过new关键字调用一个函数（构造器），
// 函数调用后，会返回一个对象，此时this是在指向构造器创建出来的对象
// this = 创建出来的对象
//这个绑定过程就是new绑定

function Person(name, age) {
  this.name = name;
  this.age = age;
};
var p1 = new Person("turnip", 18)
console.log(p1.name, p1.age)
var p2 = new Person("kang", 20);
console.log(p2.name, p2.age)
