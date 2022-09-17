// 每个对象中都有[[prototype]],这个属性可以称之为对象的原型（隐式原型）
// 普通对象的原型访问，需要通过一个非标准的方式访问，即__proto__
// 由于ECMA给函数规定了prototype。从而函数有两个原型，
// 即显示原型prototype，和隐式原型__proto__
//前者可以直接属性访问，后者需要使用非标准方式__proto__访问


let obj = { name: "turnip" }
let info = {};

// 早期并没有定义怎么去查看原型，
//因此浏览器提供了一个属性，可以看到原型对象

console.log(obj.__proto__);
console.log(info.__proto__);

function foo() { }

//ES5提供了Object.getPrototypeOf来获取对象的原型
let obj1 = { name: "trunip", __proto__: {} }
console.log(Object.getPrototypeOf(obj))
console.log(Object.getPrototypeOf(obj1))
console.log(Object.getPrototypeOf(foo))
