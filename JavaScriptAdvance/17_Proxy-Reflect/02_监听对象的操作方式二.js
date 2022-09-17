//利用Proxy的方式实现对对象的监听
//Proxy设计的本意就是为了去监听对象


const obj = {
  name: "turnip",
  age: 19
}

const objProxy = new Proxy(obj, {
  //获取值时的捕获器
  get: function (target, key) {
    console.log(`监听到对象的${key}属性被访问了`, target);
    return target[key];
  },
  //设置值时的捕获器
  set: function (target, key, newValue) {
    console.log(`监听到对象的${key}属性被设置值`, target);
    target[key] = newValue;
  }
});
console.log(objProxy.name);
console.log(objProxy.age);

objProxy.name = "kang";
objProxy.age = 30;

console.log(obj.name);
console.log(obj.age);