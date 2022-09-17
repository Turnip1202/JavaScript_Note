{
  //定义目标对象
  const person = { name: "turnip", age: 19 }
  //定义配置对象
  let handler = {
    get(target, prop, receiver) {
      console.log("你访问了person的属性")
      return target[prop]
    }
  }
  //生成Proxy实例
  const p = new Proxy(person, handler)
  console.log(p.name)
}

{//读取不存在的属性
  let person = {
    name: "turnip"
  }
  const proxy = new Proxy(person, {
    get(target, propKey) {
      if (propKey in target) return target[propKey]
      else throw new ReferenceError(`访问的属性${propKey}不存在`)
    }
  });
  console.log(proxy.name)
  console.log(proxy.age)
}

{//读取负索引的值
  const arr = [1, 4, 9, 16, 25]
  const proxy = new Proxy(arr, {
    get(target, index) {
      index = Number(index)
      if (index > 0) return target[index]
      else return target[target.length + index]
    }
  })
  console.log(proxy[2])
  console.log(proxy[-2])
}

{//禁止访问私有属性
  const person = { name: "turnip", _pwd: "123456" }
  const proxy = new Proxy(person, {
    get(target, prop) {
      if (prop.indexOf("_") === 0) throw new ReferenceError("不可以直接访问私有属性")
      else return target[prop]
    },
    set(target, prop, value) {
      if (prop.indexOf("_" === 0)) throw new ReferenceError("不可以赋值私有属性")
      else target[prop] = value;
    }
  })
  proxy.name = "kang"
  proxy._pwd = 1
  console.log(proxy.name)
  console.log(proxy._pwd)
}
{ //Proxy访问的限制
  const target = Object.defineProperties({}, {
    name: {
      value: "turnip",
      configurable: true,
      writable: false
    },
    age: {
      value: 12,
      configurable: false,
      writable: false
    }
  });
  const proxy = new Proxy(target, {
    get(targetObj, prop) {
      return "kang"
    }
  })
  console.log(proxy.name)
  console.log(proxy.age)
}

{//拦截属性赋值操作
  let target = {}
  const proxy = new Proxy(target, {
    set(target, prop, value) {
      if (prop === "age") {
        if (!Number.isInteger(value)) throw new TypeError("The age is not an integer")
        if (value > 200 || value < 0) throw new RangeError("The age is invalid")
      } else target[prop] = value
    }
  })
  proxy.name = "turnip";
  proxy.age = 10;
  proxy.age = 201

}

{//隐藏内部私有属性
  // 这里只会对in操作符生效，对for...in无效
  const obj = {
    _name: "turnip",
    age: 13
  }
  const proxy = new Proxy(obj, {
    has(target, prop) {
      if (prop[0] === "_") return false;
      return prop in target;
    }
  })
  console.log("age" in proxy)
  console.log("_name" in proxy)
}

{//禁止删除某些属性
  let obj = {
    _name: "turnip",
    age: 12
  }
  const proxy = new Proxy(obj, {
    deleteProperty(target, prop) {
      if (prop[0] === "_") throw new Error(`Invalid attempt to delete private ${prop} property`);
      return true;
    }
  })
  delete proxy.age;
  delete proxy._name
}
{//函数的拦截
  function sum(num1, num2) {
    return num1 + num2;
  }
  const proxy = new Proxy(sum, {
    apply(target, obj, args) {
      return target.apply(obj, args) * 2
    }
  })
  console.log(proxy(1, 3))
  console.log(proxy.apply(null, [1, 5]))
  console.log(proxy.call(null, 3, 4))
}
{//实现真正的私有属性
  const apis = {
    _apiKey: "12ab34cd56ef",
    getAllUsers() { console.log("这是查询全部用户的函数") },
    getUserById(userId) { console.log("这是根据用户id查询用户的函数") },
    saveUser(user) { console.log("这是保存用户的函数") }
  }
  const proxy = new Proxy(apis, {
    get(target, prop) {
      if (prop[0] === "_") return undefined;
      return target[prop]
    },
    set(target, prop, value) {
      if (prop[0] !== "_") target[prop] = value;
    },
    has(target, prop) {
      if (prop[0] === "_") return false;
      return prop in target;
    }
  });
  console.log(proxy._apiKey);
  console.log(proxy.getAllUsers());
  proxy._apiKey = "123";
  console.log("getUserById" in proxy);
  console.log("_apiKey" in proxy);
}
{ //增加日志记录
  const apis = {
    _apiKey: "12ab34cd56ef",
    getAllUsers() { console.log("这是查询全部用户的函数") },
    getUserById(userId) { console.log("这是根据用户id查询用户的函数") },
    saveUser(user) {
      console.log("这是保存用户的函数")
    }
  }
  //记录日志的方法
  function recordLog() { console.log("这是记录日志的函数") };
  const proxy = new Proxy(apis, {
    get(target, prop) {
      const value = target[prop];
      return (...args) => { recordLog(); return value.apply(null, args) }
    }
  });
  proxy.getAllUsers();
}

{//提供友好提示或阻止特定操作
  let dataStore = {
    noDelete: 123,
    oldMethod() { },
    doNotChange: "tried and true"
  }
  let NO_DELETE = ["noDelete"];
  let DEPRECATED = ["oldMethod"]
  let NO_CHANGE = ["doNotChange"]
  const proxy = new Proxy(dataStore, {
    set(target, key, value, proxy) {
      if (NO_CHANGE.includes(key)) throw Error(`Error! ${key} is immutable`)
      return true
    },
    deleteProperty(target, key) {
      if (NO_DELETE.includes(key)) throw Error(`Error! ${key} cannot be deleted`)
      return true
    },
    get(target, key, proxy) {
      if (DEPRECATED.includes(key)) console.log(`Warning! ${key} is deprecated`)
      const val = target[key];
      return typeof val === "function" ? (...args) => { val.apply(null, args) } : val
    }
  })
  // proxy.doNotChange = "foo"
  // delete proxy.noDelete;
  proxy.oldMethod()

}