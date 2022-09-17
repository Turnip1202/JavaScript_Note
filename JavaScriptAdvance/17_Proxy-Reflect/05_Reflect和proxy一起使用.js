//这里通过Proxy对对象的所有属性进行了监听,
//当对象属性发生某些操作时,可以在捕获器总进行相应操作
//使用Reflect,是为了避免对外部对象的直接操作

const obj = {
  name: "turnip",
  age: 19
}

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log("get------------");
    // return target[key];//这里实质也是对原来对象进行了操作
    return Reflect.get(target, key);//这里使用Reflect对对象进行获取
  },
  set: function (target, key, newValue, receiver) {
    console.log("set-----------")
    target[key] = newValue;

    //进一步进行判断
    const result = Reflect.set(target, key, newValue)
    if (result) {
      console.log("设置成功");
    } else {
      console.log("设置失败")
    }
  }
});
objProxy.name = "kang";
console.log(objProxy.name)