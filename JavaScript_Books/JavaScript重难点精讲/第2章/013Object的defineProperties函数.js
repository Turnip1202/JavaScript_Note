let obj = {};
//给对象配置name和age属性
Object.defineProperties(obj, {
  name: {
    value: "turnip",
    enumerable: true
  },
  age: {
    value: 22,
    enumerable: true
  }
})
console.log(obj.name)
for (let item in obj) console.log(item);
obj.age = 23;
console.log(obj.age);//22 ：age属性的writable默认为false，此时代表只读

