const Obj = { name: "Obj1" }
// 1,WeakMap和Map的区别：
const map = new Map();
map.set(Obj, "aaa")

const weakMap = new WeakMap();
weakMap.set(Obj, "aaa")

console.log(map);
console.log(weakMap);//{<items unknown>} WeakMap不可以直接打印

// 2，区别一：不能使用基本数据类型最为key
// weakMap.set(1, "kkk");//Invalid value used as weak map key


// 3,常见方法
// get方法
console.log(weakMap.get(Obj));

// has方法
console.log(weakMap.has(Obj));//true

// delete方法
console.log(weakMap.delete(Obj));//true

console.log(weakMap);//WeakMap { <items unknown> }

