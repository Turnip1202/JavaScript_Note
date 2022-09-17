let obj = Object.create(null, {
  name: {
    value: 'turnip',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 22
  }
})
console.log(obj.name);//turnip
console.log(obj.age);//22
obj.age = 28;
console.log(obj.age);//22:age属性的writable默认为false，此属性为只读
for (let item in obj) {
  console.log(item);//name:只输出name属性；age属性的enumerable默认为false，不能通过for...in枚举
}

//手写Object.create函数
Object.T_create = function (proto, propertiesObject) {
  function F() { }
  F.prototype = proto
  return new F;
}

let test = Object.T_create({ x: 123, y: 345 });
console.log(test);//{}， 实际生成的对象为一个空对象
console.log(test.x);//123
console.log(test.__proto__.x);//123
console.log(test.__proto__.x === test.x);//true