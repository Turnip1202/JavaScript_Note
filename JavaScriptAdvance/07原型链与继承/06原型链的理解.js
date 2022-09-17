let obj = {
  name: "why",
  age: 18
}
obj.__proto__ = {
  // address: "周口市"
}

obj.__proto__.__proto__ = {
  // address: "绵阳市"
}
obj.__proto__.__proto__.__proto__ = {
  // address: "郑州市"
}
obj.__proto__.__proto__.__proto__.__proto__ = {
  address: "三门峡市"
}


//打印时，会触发[[get]]操作，
// 1，在当前对象内查找属性，
// 2. 如果找不到，就沿着原型链(__proto__)逐级查找
console.log(obj.address);
