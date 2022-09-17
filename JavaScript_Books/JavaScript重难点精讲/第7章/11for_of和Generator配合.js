function* testGenerator() {
  yield "hello";
  yield "world";
}
const t = testGenerator();
for (let key of t) console.log(key);


//对象借助Generator
function* propGenerator() {
  let propArr = Object.keys(this)
  for (let prop of propArr) yield [prop, this[prop]]
}
let obj = {
  name: "turnip",
  age: 12
}
obj[Symbol.iterator] = propGenerator
for (let [key, value] of obj) console.log(key, ":", value)