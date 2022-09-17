// 总结：不使用weak的话会使得数据对象有两个强引用；使用weak是为了，将来销毁数据

// 即：为了便于垃圾回收

// 应用场景（vue3响应式原理）

const obj1 = {
  name: "turnip",
  age: 19
}

function obj1NameFn1() {
  console.log("obj1NameFn1被执行")
}
function obj1NameFn2() {
  console.log("obj1NameFn2被执行")
}

function obj1AgeFn1() {
  console.log("obj1AgeFn1被执行")
}
function obj1AgeFn2() {
  console.log("obj1AgeFn2被执行")
}


const obj2 = {
  name: "kang",
  height: 1.88,
  address: "郑州市"
}

function obj2NameFn1() {
  console.log("obj1NameFn1被执行")
}
function obj2NameFn2() {
  console.log("obj1NameFn2被执行")
}


// 1,创建WeakMap
const weakMap = new WeakMap()


// 2,收集依赖结构
// 2.1对obj1收集的数据解构
const obj1Map = new Map();
obj1Map.set("name", [obj1NameFn1, obj1NameFn2]);
obj1Map.set("age", [obj1AgeFn1, obj1AgeFn2]);
weakMap.set(obj1, obj1Map);

// 2.1 对obj2收集的数据解构
const obj2Map = new Map();
obj2Map.set("name", [obj2NameFn1, obj2NameFn2])
weakMap.set(obj2, obj2Map)

// 3,如果obj1.name 发生了改变
// Proxy/Object.defineProperty
obj1.name = "james"
const targetMap = weakMap.get(obj1)
const fns = targetMap.get("name")
fns.forEach(item => item())




