class Depend{
  constructor() {
    this.reactiveFns = [];//存放watch添加的函数
  };
  
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);//添加到当前depend对象的数组里
  };
  notify() {
    this.reactiveFns.forEach(fn => { fn(); })
  }

}

//封装响应式函数
const depend = new Depend();//构造depend函数
function watchFn(fn) {
  depend.addDepend(fn)
}

//封装获取depend的函数
const targetMap = new WeakMap();
//改造Depend类存储逻辑
function getDepend(target, key) {

  let map = targetMap.get(target)
  if (!map) { 
    map = new Map();
    targetMap.set(target, map)
  };

  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}

//对象的响应式
const obj = {
  name: "turnip",
  age:18
}

//监听对象的属性变量
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    //根据target对象获取map
    const depend = getDepend(target, key);
    depend.notify();
  }
});

watchFn(function () {
  const newName = objProxy.name;
  console.log("你好，turnip");
  console.log(objProxy.name);
})
watchFn(function () {
  console.log(objProxy.name,"demo function---")
})
watchFn(function () {
  console.log(objProxy.age,"age 发生变化1")
})
watchFn(function () {
  console.log(objProxy.age,"age 发生变化2")
})
objProxy.name = "kang"
