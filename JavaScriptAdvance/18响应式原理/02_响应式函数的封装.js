


//封装一个响应式函数



let reactiveFns = [];//存储
function watchFn(fn) {
  reactiveFns.push(fn);
}


//对象的响应式
const obj = {
  name: "turnip",
  age: 19
}
watchFn(function () {
  const newName = obj.name;
  console.log("你好啊,turnip");
  console.log("Hello World");
  console.log(obj.name)
})


watchFn(function () {
  console.log(obj.name, "demo function ____")
})

function bar() {
  console.log("普通函数");
  console.log("这个函数不需要任何响应式")
}

obj.name = "kang"
reactiveFns.forEach(fn => { fn() })