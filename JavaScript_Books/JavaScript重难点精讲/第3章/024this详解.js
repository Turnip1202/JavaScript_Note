// this指向全局对象
var value = 10;
var obj = {
  value: 100,
  method() {
    var foo = function () {
      console.log(this.value);//10
      console.log(this);// 全局对象
    }
    foo()
    return this.value
  }
}
console.log(obj.method())


//this指向对象实例
var number = 10;
function Person() {
  number = 20;
  this.number = 30;
}
Person.prototype.getNumber = function () {
  return this.number;
}
var p = new Person();
console.log(p.getNumber());

// call/apply/bind
var value = 10;
var obj = {
  value: 20
}
var method = function () {
  console.log(this.value)
}
method();
method.call(obj);
method.apply(obj);
method.bind(obj)();


//闭包中的this
var user = {
  sport: "basketball",
  data: [{ name: "turnip", age: 18 }, { name: "kang", age: 19 }],
  clickHandler: function () {
    var _this = this;
    this.data.forEach(function (person) {
      console.log(person.name + " is playing " + _this.sport)
    })
  }
}
user.clickHandler();

//this的面试题
function f(k) {
  this.m = k;
  return this;
}
var m = f(1);
var n = f(2);
console.log(m.m)
console.log(n.m)