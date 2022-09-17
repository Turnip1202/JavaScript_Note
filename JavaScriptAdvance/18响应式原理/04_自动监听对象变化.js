/**
 * 1，使用Proxy实现对源对象obj的监听
 * 2，使用Reflect在监听内部操作源对象
 * 3，构造depend类添加和调用，然后在watch函数内对depend类的操作
 * 
 */



class Depend {
  constructor() {
    this.reactiveFns = []
  };
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  };
  notify() {
    this.reactiveFns.forEach(fn => { fn() })
  }
}

//封装一个响应式的函数
const depend = new Depend
function watchFn(fn) {
  depend.addDepend(fn)
}
//对象的响应式
const obj = {
  name: "turnip",
  age: 19
}
//监听对象属性的变化
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depend.notify();//当对象属性改变时，会通知对应的所有函数
  }
});

watchFn(function () {
  const newName = objProxy.name
  console.log("你好啊，turnip");
  console.log("Hello World");
  console.log(objProxy.name)
})
watchFn(function () {
  console.log(objProxy.name, "demo function ________")
})
watchFn(function () {
  console.log(objProxy.age, "age 发生变化时需要执行的函数------1")
})
watchFn(function () {
  console.log(objProxy.age, "age 发生变化时需要执行的函数------2")
})


objProxy.name = "kang";
objProxy.name = "kkk";
objProxy.age = 100;