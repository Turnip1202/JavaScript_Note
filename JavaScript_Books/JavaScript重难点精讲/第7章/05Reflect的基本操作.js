console.log(Reflect.has(Object, "assign"));
//Reflect.apply(target,thisArg,args)
{
  // ES6
  const arr = [1, 2, 3, 4, 5]
  let max = Reflect.apply(Math.max, null, arr)
  console.log(max);
  // ES5
  max = Math.max.apply(null, arr)
  console.log(max)
  max = Function.prototype.apply.call(Math.max, null, arr)
  console.log(max)
}
{//截取字符串的一部分
  let str = "hello, world"
  // ES6写法
  let newStr = Reflect.apply(String.prototype.slice, str, [2, 8])
  console.log(newStr)
  // ES5写法
  newStr = str.slice(2, 8)
  console.log(newStr)
  newStr = String.prototype.slice.apply(str, [2, 8])
  console.log(newStr)
}

//Reflect.definedProperty
{
  let obj = {}
  //ES5的写法
  try {
    Object.defineProperty(null, "a", { value: 22 })
  } catch (e) { console.log("define property failed") }
  //使用Obect.definedProperty成功定义
  let obj1 = Object.defineProperty(obj, "name", {
    //这里没有configurable，则默认不可配置，此操作是单向的，一旦设置不可更改
    enumerable: true,
    value: "turnip"
  })
  console.log(obj);
  console.log(obj1);
  let result = Reflect.defineProperty(obj, "name", {
    configurable: true,
    enumerable: true,
    value: "kang"
  })
  console.log(result);//因为configurable第一次设置了false
  let result2 = Reflect.defineProperty(obj, "age", {
    configurable: true,
    enumerable: true,
    value: 22
  })
  console.log(result2)
  console.log(obj)
}
//Reflect.deleteProperty(target,propKey)
{
  let obj = {
    name: "turnip",
    age: 22
  }
  let r1 = Reflect.deleteProperty(obj, "name")
  console.log(r1)
  let r2 = Reflect.deleteProperty(obj, "name");
  console.log(r2);
  let r3 = Reflect.deleteProperty(Object.freeze(obj), "age")
  console.log(r3)

  //传统delete写法
  let obj2 = {
    name: "turnip",
    age: 22
  }
  delete obj2.name;
  console.log(obj2)
  delete obj2.name;
  console.log(obj2)
  Object.freeze(obj2)
  delete obj2.age;
  console.log(obj2)
}

//Reflect.set(target, propKey, value, receiver)
{
  let obj = {
    _name: "",
    set name(name) {
      console.log("this", this);
      this._name = name
    },
    get name() {
      return this._name
    },
    age: 22
  }
  let r1 = Reflect.set(obj, "age", 24);
  console.log(r1)
  let r2 = Reflect.set(obj, "name", "turnip");//this { _name: '', name: [Getter/Setter], age: 24 }
  console.log(r2)

  let receiver = { test: "test" };
  let r3 = Reflect.set(obj, "name", "turnip", receiver);//thi指向receiver
  console.log(r3)
  console.log(obj)
  console.log(receiver)
}

//Reflect和Proxy的基本配合
{
  let target = {
    name: "turnip"
  }
  const proxy = new Proxy(target, {
    get(target, prop) {
      console.log(`读取属性${prop}的值为${target[prop]}`)
      return Reflect.get(target, prop)
    },
    set(target, prop, value) {
      console.log(`设置属性${prop}的值${value}`)
      return Reflect.set(target, prop, value)
    },
    deleteProperty(target, prop) {
      console.log(`删除属性:${prop}`)
      return Reflect.deleteProperty(target, prop)
    }
  })
  console.log(proxy.name)
  proxy.name = "kang";
  delete proxy.name;

}


