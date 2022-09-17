let obj = {
  name: "turnip",
  age: 18,
  height: 1.88,
  age1: 19
}
// 对象的解构:{}
let { name, age, height } = obj;
console.log(name, age, height);

let { age1 } = obj
console.log(age1);

let { name: newName } = obj;
console.log(newName);

let { address: newAddress = "郑州市" } = obj;
console.log(newAddress)


function foo(info) {
  console.log(info.name, info.age)
}

foo(obj)

function bar({ name, age }) {
  console.log(name, age)
}
bar(obj)