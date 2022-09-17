let obj = {
  age: 21,
  valueOf() { return this.age },
  toString() { return "good" }
}

console.log(Number(obj));


// 对象类型在转换为Number时，会先调用valueOf函数，若不是数字则继续调用toString函数

let obj1 = {
  age: 21,
  valueOf() { return "kang" },
  toString() { return "turnip" }
}

console.log(Number(obj1));//NaN

let obj2 = {
  age: 21,
  valueOf() { return "aaa" },
  toString() { return [] }
}

console.log(String(obj2));//TypeError: Cannot convert object to primitive value