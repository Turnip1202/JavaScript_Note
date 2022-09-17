//数组
const arr = ["one", "two", "three"]
for (let item of arr) {
  console.log(item)
}

//Set
let set = new Set(["one", "two", "three"]);
for (let item of set) console.log(item)

//Map
let map = new Map()
map.set("name", "turnip").set("age", 12).set("address", "郑州");
for (let prop of map) console.log(prop)

//NodeList自行测试


// arguments对象
function foo() {
  for (let arg of arguments) console.log(arg)
}
foo(1, 2, 3, 4, 5, 6)



//对象的特殊遍历
const obj = {
  name: "turnip",
  age: 12,
  address: "郑州"
}
//Object.keys返回的是一个对象属性的数组
for (let item of Object.keys(obj)) console.log(item)
//Object.values返回的是一个对象属性值的数组
for (let item of Object.values(obj)) console.log(item)
// Object.entries返回一个entries数组
for (let item of Object.entries(obj)) console.log(item)
