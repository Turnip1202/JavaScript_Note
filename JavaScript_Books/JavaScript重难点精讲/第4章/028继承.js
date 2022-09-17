// 原型链继承
// 通过改变原型链，即将子类的原型指向父类的实例来实现
function Animal(name) {
  this.type = "Animal";
  this.name = name || "萝卜";
  //实例函数
  this.sleep = function () {
    console.log(this.name + "吃薯片")
  }
}
Animal.prototype.eat = function (food) {
  console.log(this.name + "正在吃" + food)
}
function Cat(name) {
  this.name = name;
}
Cat.prototype = new Animal;//改变原型链
Cat.prototype.constructor = Cat;
var cat = new Cat("橘子")
console.log(cat.type);
console.log(cat.name)
cat.sleep()
cat.eat("辣条")



// 构造继承
// 通过call函数调用父类的执行逻辑
function Animal(age) {
  this.name = "Animal"
  this.age = age;
  this.sleep = function () {
    return this.name + `正在睡觉！`;
  }
}
Animal.prototype.eat = function (food) {
  return this.name + "正在吃" + food;
}
function Cat(name) {
  //通过call函数，执行父类的逻辑
  Animal.call(this);
  //写自己的逻辑
  this.name = name || "Cat"
}
var cat = new Cat("kang")
console.log(cat.sleep())
// console.log(cat.eat());//TypeError: cat.eat is not a function
console.log(cat instanceof Cat);//true
console.log(cat instanceof Animal);//false


// 复制继承
// 通过for...in遍历父类的实例来实现对父类方法和属性的复制
function Animal(parentAge) {
  this.name = "Animal";
  this.age = parentAge;
  this.sleep = function () {
    return this.name + "正在睡觉"
  }
}
Animal.prototype.eat = function (food) {
  return this.name + "正在吃:" + food;
}
function Cat(name, age) {
  var animal = new Animal(age);
  for (var key in animal) {
    //判断是否是自身属性
    if (animal.hasOwnProperty(key)) this[key] = animal[key];
    //如果不是自身属性，则加入到子类的原型上
    else Cat.prototype[key] = animal[key]
  }
  //子类自身的属性和方法
  this.name = name;
}
Cat.prototype.eating = function (food) {
  return this.name + "正在吃：" + food;
}
var cat = new Cat("tony", 12);
console.log(cat.age);
console.log(cat.sleep());
console.log(cat.eat("薯片"))
console.log(cat.eating("薯条"))


// 组合继承
// 利用原型链的查询规则来实现子类和父类方法的配合
function Animal(parentAge) {
  this.name = "Animal";
  this.age = parentAge;
  this.sleep = function () {
    return this.name + "正在睡觉";
  }
  this.feature = ["fat", "thin", "tall"];
}
Animal.prototype.eat = function (food) {
  return this.name + "正在吃：" + food;
}
function Cat(name) {
  Animal.call(this);//调用父类的属性和方法
  this.name = name;
}
Cat.prototype = new Animal();//改变子类原型的指向
Cat.prototype.constructor = Cat;
var cat = new Cat("tony");
console.log(cat.name);
console.log(cat.sleep())
console.log(cat.eat("薯片"));


//寄生组合继承
// 使用一个空函数，将空函数的原型指向父类的原型，然后再将子类的原型指向空函数的实例
function Animal(parentAge) {
  this.name = "Animal";
  this.age = parentAge;
  this.sleep = function () {
    return this.name + "正在睡觉";
  };
  this.feature = ["fat", "thin", "tall"];

}
function Cat(name) {
  Animal.call(this);
  this.name = name;
};
; (function () {
  var Super = function () { }
  Super.prototype = Animal.prototype;
  Cat.prototype = new Super();
  Cat.prototype.constructor = Cat;
})();
