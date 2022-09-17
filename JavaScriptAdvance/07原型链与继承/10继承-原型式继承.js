// 更改对象的原型继承



let obj = {
  name: "turnip",
  age: 18
}

let info = Object.create(obj);

console.log(Object.getPrototypeOf(info))

//原型式继承函数
function createObject1(o) {
  let newObj = {}
  Object.setPrototypeOf(newObj, o);
  return newObj;
}

function createObject2(o) {
  function Fn() { }
  Fn.prototype = o;
  let newObj = new Fn;

  // // __proto__是不规则的，故尽量不要使用下面的方式
  // let obj = {}
  // obj.__proto__ = o;

  return newObj;

}

let info1 = createObject2(obj);
console.log(info, info.__proto__)