// 原型链上的属性不可枚举，即不可见
let obj = {
  name: "turnip",
  age: 18
};
obj.__proto__ = {
  address: "北京市"
};

console.log(obj);//{ name: 'turnip', age: 18 }