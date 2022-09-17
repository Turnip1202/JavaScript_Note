// 函数有两个原型,隐式原型和显示原型
function foo() { }


//一个对象被创建出来的时候，同时会创建出原型对象

//在js中函数也是对象，故函数有隐式原型
//同时ECMA规定函数有一个显示原型。
//综上，函数有两个原型
console.log(foo.prototype);//指向函数本身的原型对象
console.log(foo.__proto__);//指向Function构造函数的原型对象
console.log(foo.prototype === foo.__proto__)


let f1 = new foo();
let f2 = new foo();
console.log(f1.__proto__ === foo.prototype)
console.log(f2.__proto__ === foo.prototype)