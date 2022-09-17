let obj = {
  name: "turnip",
  age: 18
}

let info = Object.create(obj, {
  address: {
    value: "郑州市",
    enumerable: true
  }
})

// hasOwnProperty方法:判断是否在当前对象上，不会查找原型
console.log(info)
console.log(info.hasOwnProperty("address"));//true
console.log(info.hasOwnProperty("name"));//true

// in : 会沿着原型链查找
console.log("address" in info);//true
console.log("name" in info);//true


// for in : 会遍历原型链
for (let key in info) console.log(key);



