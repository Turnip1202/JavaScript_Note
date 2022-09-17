// // 1,ES6之前，对象的属性名（key）
// const obj = {
//   name: "turnip",
//   friend: { name: "kobe" },
//   age: 18
// }

// obj["newName"] = "james"
// console.log(obj)

// 2，ES6中Symbol的基本使用
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2)


// ES2019(ES10)中，Symbol还有一个描述（description）
const s3 = Symbol("turnip");
console.log(s3.description)

// 3,Symbol值最为key
// 3.1在定义中对象字面量时使用
const obj = {
  [s1]: "turnip",
  [s2]: "kang"
}

// 3.2新增属性
obj[s3] = "nbs"


// 3.3  Object.defineProperty方式
const s4 = Symbol();
Object.defineProperty(obj, s4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "huimin"
})

console.log(obj[s1], obj[s2], obj[s3], obj[s4]);


// 注意：不能通过.语法获取
// console.log(obj.s1);

// 4,使用Symbol作为key的属性名，在 遍历/Object.keys等中时获取不到这些Symbol值
// 需要Object.getOwnPropertySymbols来获取所有的Symbol的key
console.log(Object.keys(obj));//[]
console.log(Object.getOwnPropertyNames(obj));//[]
console.log(Object.getOwnPropertySymbols(obj));//[ Symbol(), Symbol(), Symbol(turnip), Symbol() ]
const sKeys = Object.getOwnPropertySymbols(obj);
for (const skey of sKeys) console.log(obj[skey])



