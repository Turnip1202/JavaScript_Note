const obj = {
  name: "turnip",//数据属性描述符
  age: 19
}

// 使用Object.defineProperty，实质将其变成了一个存取属性描述符



const objProxy = new Proxy(obj, {
  //获取值时的不获取
  get: function (target, key) {
    console.log(`监听对象${key}属性被访问了`, target)
    return target[key];
  },
  //设置值时的捕获器
  set: function (target, key, newValue) {
    console.log(`监听对象${key}属性被设置值`, target);
    target[key] = newValue;
  },
  //监听in的捕获器
  has: function (target, key) {
    console.log(`监听对象的${key}属性in操作`, target)
    return key in target;
  },
  //监听delete的捕获器
  deleteProperty: function (target, key) {
    console.log(`监听到对象的${key}属性delete操作`, target)
    delete target[key];
  }
})

//in 操作符
console.log("name" in objProxy);

// delete操作
delete objProxy.name;
