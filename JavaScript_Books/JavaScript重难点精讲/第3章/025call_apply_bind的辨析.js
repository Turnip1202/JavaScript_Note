// call
function add(x, y) { return x + y }
function myAddCall(x, y) {
  return add.call(this, x, y)
}
console.log(myAddCall(10, 20))

// apply
function add(x, y) { return x + y }
function myAddCall(x, y) {
  return add.apply(this, [x, y])
}
console.log(myAddCall(10, 20));

// bind 
function add(x, y) { return x + y; }
function myAddCall(x, y) {
  return add.bind(this, x, y)();
}
console.log(myAddCall(10, 20))


// 1，求数组最大项和最小项
var arr = [3, 5, 7, 9, 11];
console.log(Math.max.apply(null, arr))
console.log(Math.min.apply(null, arr));

// 2,类数组转化为数组
//任意数组求和
function sum() {
  var arr = Array.prototype.slice.call(arguments);
  return arr.reduce((pre, cur) => pre + cur, 0)
}
let r1 = sum(1, 2)
let r2 = sum(1, 2, 3)
console.log(r1, r2)


// 3，用于继承
function Animal(age) {
  this.age = age;
  this.sleep = function () {
    return this.name + "正在吃薯片"
  }
}

function Cat(name, age) {
  Animal.call(this, age);
  this.name = name || "tom"
}
var cat = new Cat("tony", 11)
console.log(cat.sleep());
console.log(cat.age);

// 4,执行匿名函数
var animals = [{ species: "Lion", name: "Kning" }, { species: "Whale", name: "Fail" }];
for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log(`#${i} ${this.species}: ${this.name}`)
    }
    this.print();
  }).call(animals[i], i);
}

// 5,bind配合setTimeout函数
function Lateloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}
Lateloomer.prototype.bloom = function () {
  setTimeout(this.declare.bind(this), 1000)
}
Lateloomer.prototype.declare = function () {
  console.log("I am beautiful flower with " + this.petalCount + " petals!")
}
var flower = new Lateloomer();
flower.bloom();
