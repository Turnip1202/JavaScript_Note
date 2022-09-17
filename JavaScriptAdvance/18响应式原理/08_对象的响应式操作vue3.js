let activeReactive = null;
class Depend {
  constructor() {
    this.reactiveFns = new Set;
  }
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }
  notify() {
    this.reactiveFns.forEach(fn => {
      fn();
    })
  }
}
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}
const targetMap = new WeakMap;
function getDepend(target, key) {
  let map = targetMap.get(target)
  if (!map) {
    map = new Map;
    targetMap.set(target, map)
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend;
    map.set(key, depend)
  }
  return depend
}
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      const depend = getDepend(target, key)
      depend.depend()
      return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      const depend = getDepend(target, key);
      depend.notify()
    }
  })
}
const objProxy = reactive({
  name: "turnip",
  age: 18
})
const infoProxy = reactive({
  address: "郑州市",
  height: 1.88
})
watchFn(() => {
  console.log(infoProxy.address)
})
infoProxy.address = "北京市";
const fooProxy = reactive({
  name: "foo"
});
watchFn(() => console.log(fooProxy.name))
fooProxy.name = "bar"