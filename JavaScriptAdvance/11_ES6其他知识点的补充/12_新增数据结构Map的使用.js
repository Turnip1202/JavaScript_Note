// 1，JavaScript里对象中是不能使用对象作为key的
const Obj1 = { name: "turnip" }
const Obj2 = { name: "kang" }

const info = {
  [Obj1]: "aaa",
  [Obj2]: "bbb"
}

console.log(info);// 会使得key重复

// 2,Map可以允许我们对象类型来作为key
// 构造方法的使用
const map = new Map;
map.set(Obj1, "aaa");
map.set(Obj2, "bbb");
map.set(1, "ccc");
console.log(map);


const map2 = new Map([[Obj1, "aaa"], [Obj2, "bbb"], [2, "ddd"]]);
console.log(map2);

// 3,常见属性和方法
console.log(map2.size);

// set 
map2.set("turnip", "kkk");
console.log(map2);

// get(key)
console.log(map2.get("turnip"));//kkk

// has(key)
console.log(map2.has("turnip"));//turnip

// delete(key)
const dl = map2.delete("turnip");
console.log(map2, dl)


// clear
map2.clear();
console.log(map2)

// 4,遍历map
map.forEach((item, key) => console.log(item, key));

for (const item of map) {
  console.log(item[0], item[1])
}

for (const item of map) {
  console.log(item)
}

for (const [key, value] of map) {
  console.log(key, value)
}

