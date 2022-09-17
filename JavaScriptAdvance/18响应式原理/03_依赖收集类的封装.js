class Depend {
  constructor() {
    this.reactiveFns = []
  };
  //添加
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  };
  //通知
  notify() {
    this.reactiveFns.forEach(fn => { fn() })
  }
}


//响应式函数
const depend = new Depend();//将每一个属性对应一个depend对象
function watchFn(fn) {
  depend.addDepend(fn);
}

//对象的响应式
const obj = {
  name: "turnip",
  age: 19
}


watchFn(function () {
  const newName = obj.name;
  console.log("你好啊，turnip")
  console.log("Hello World")
  console.log(obj.name)
})

watchFn(function () {
  console.log(obj.name, "demo function -------------")
})

obj.name = "kang"
depend.notify();

