const obj = {
  _name: "turnip",
  //这里相当于是定义了存取属性描述符
  get name() {
    return this._name
  },
  set name(newValue) {
    console.log("name的set被调用")
    this._name = newValue;
  }
}

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // receiver是创建出来的代理对象
    console.log("get方法被访问了-------", key, receiver);
    console.log(receiver === objProxy);
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, newValue, receiver) {
    console.log("set方法被访问--------", key);
    Reflect.set(target, key, newValue, receiver)
  }
})
console.log(objProxy.name);

//这一步,在对name设置时,会找到name的set函数,同时Proxy的set函数也会调用,而name内的set对_name进行的操作也会触发Proxy的set函数
//objProxy.name = "kang" → 触发name的set函数,同时触发一次Proxy的set函数 → 在name的set函数内又对_name进行了操作,则此时又将触发一次Proxy的set函数
objProxy.name = "kang";


