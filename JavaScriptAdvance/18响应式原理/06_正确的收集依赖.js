class Depend{
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    console.log(this.reactiveFns);
    this.reactiveFns.forEach(fn => { fn(); })
  }
}

//封装一个响应式的函数
let activeReactiveFn = null;
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

//封装一个获取Depend类函数
//这里会对Depend类的存储逻辑进行改造，使得对应关系更加清晰

//depend类还是depend类，只是用了WeakMap进行修改存储逻辑，使得更加清晰
const targetMap = new WeakMap();//用于存储修改后的depend类


function getDepend(target, key) {
  //根据target对象获取map的过程
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  //根据key获取depend对象
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend;
    map.set(key, depend);
  }

  //经过上面的逻辑之后，depend类将存储成 WeakMaP  target:map    Map  key:depend类
  return depend;//这里的depend
}


//对象的响应式
const obj = {
  name: "turnip",
  age:19
}

//监听对象的属性
const objProxy = new Proxy(obj, {
  get: (target, key, receiver) => {
    const depend = getDepend(target, key);
    depend.addDepend(activeReactiveFn)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key)
    depend.notify();
  }
});
watchFn(() => {
  console.log("第一个name函数始")
  console.log("你好啊，turnip")
  console.log(objProxy.name)
  console.log("第一个name函数结束")
})
watchFn(() => {
  console.log(objProxy.name, "demo function")
});
watchFn(() => {
  console.log(objProxy.age,"第一个age函数")
})


objProxy.name = "turnip"
objProxy.age = 18;
