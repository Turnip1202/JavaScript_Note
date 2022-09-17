//保存当前需要收集的响应式函数
let activeReactiveFn = null;
/**
 * Depend优化
 * 1>depend方法的优化
 * 2>使用Set来保存以来函数，防止重复
 */
class Depend {
  constructor() {
    this.reactiveFns = new Set;
  };
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);//Set的添加方法
    }
  }
  notify() {
    this.reactiveFns.forEach(fn => { fn() })
  }
}


//封装一个响应式函数
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}


//封装一个获取depen的函数
//就是对depend类改造，使得对应关系更加清晰
const targetMap = new WeakMap;
function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map;
    targetMap.set(target, map)
  }

  let depend = map.get(key);
  if (!depend) {
    depend = new Depend;
    map.set(key, depend)
  }
  return depend;
}

const obj = {
  name: "turnip",
  age: 19
}
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    const depend = getDepend(target, key)
    depend.depend()
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key);
    depend.notify();
  }
})

watchFn(() => {
  console.log(objProxy.name, "---")
  console.log(objProxy.name, "+++")
})
objProxy.name = "kang"
let a = 12;