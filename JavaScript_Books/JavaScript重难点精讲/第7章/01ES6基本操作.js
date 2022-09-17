//解构赋值
{
  let [arg1, arg2] = [12, 34]
  console.log(arg1);
  console.log(arg2);

}

{
  let [, , num3] = [12, 34, 56]
  console.log(num3);
}

{
  let [num1, num2, num3] = [12, 34]
  console.log(num1, num2, num3)

}
//解构赋值-默认值
{
  let [num1 = 1, num2] = [, 34]
  console.log(num1, num2)

}

//默认值会采用===
{
  let [num1 = 1, num2 = 2, num3 = 3] = [null, ''];
  console.log(num1, num2, num3)
}

//ES6交换变量
{
  let a = 1; let b = 2;
  console.log(a, b);
  [a, b] = [b, a]
  console.log(a, b)
}

//解析返回的数组
{
  function fn() {
    return [12, 34]
  }
  let [num1, num2] = fn();
  console.log(num1, num2)
}

//嵌套数组解构
{
  let [num1, num2, [num3, num4]] = [12, [34, 56], [78, 89]]
  console.log(num1, num2, num3, num4)
}

//函数参数解构
{
  function foo([arg1, arg2]) {
    console.log(arg1, arg2)
  }
  foo([12, 34])
}

//对象的解构赋值
{
  let { m, n, o } = { m: "kangx", n: 12 }
  console.log(m, n, o)
}
//对象解构属性名与变量不相同时，必须按照key:value的形式
{
  let { m: name, n: age } = { m: "kangx", n: 12 }
  console.log(name)
  console.log(age)
}
{
  // let { m: m, n: n } = { m: "kangx", n: 12 }
  // console.log(m, n)
  //简写形式
  let { m, n, t: k } = { m: "turnip", n: 12 }
  console.log(m, n)
  // console.log(t)
}
//对象解构的默认值
{
  let { m, n = 1, o = true } = { m: "kangx", o: null }
  console.log(m, n, o);//null，因为null和undefined不严格相等
}
{
  let { m, n: age = 1 } = { m: "kangx" }
  console.log(m, age)
}

//嵌套对象的解构
{
  let obj = {
    p: ["Hello", { y: "world" }]
  };

  let { p: [x, { y: name }] } = obj
  console.log(x, name)
}

//选择性解构对象的属性
{
  let { min, max } = Math;
  console.log(min(1, 3))
  console.log(max(1, 3))
}

//函数参数解构
{
  function whois({ displayName: displayName, fullName: { firstName: name } }) {
    console.log(displayName + " is " + name)
  }
  const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
      firstName: "John",
      lastName: "Doe"
    }
  }
  whois(user)
}


//扩展运算符(展开数据)
{
  const array = [1, 2, 3, 4, 5];
  console.log(...array)
  const str = "turnip"
  console.log(...str)
}
//扩展运算符可以代替apply函数
{
  let arr = [1, 2, 3, 4, 5]
  console.log(Math.max.apply(null, arr))
  console.log(Math.max(...arr))
}

{
  function add(num1, num2) { return num1 + num2; }
  const arr = [1, 5]
  let result = add.apply(null, arr)
  console.log(result)
  console.log(add(...arr))
}

//扩展运算符代替concat函数合并数组
{
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  console.log([...arr1, ...arr2])
}


//扩展运算符转换Set,得到去重的数组
{
  let arr = [1, 2, 4, 2, 3, 4, 5, 6]
  console.log(...new Set(arr))
}

{
  let obj = { name: "turnip" };
  let obj2 = { ...obj }
  console.log(obj2)
  obj.name = "kang"
  console.log(obj)
}
{
  let obj3 = {
    name: "turnip",
    address: {
      province: "郑州", city: "周口"
    }
  }
  let obj4 = { ...obj3 };
  obj4.name = "kang";
  obj4.address.city = "云南";//影响到课obj3的address
  console.log(obj3)
}


// rest运算符(用于合并数据于数组)
{
  let arr = ["one", "two", "three", "four"];
  let [arg1, ...arg2] = arr;
  console.log(arg1);
  console.log(arg2)
}
{
  let arr = ["one", "two", "three", "four"];
  // let [...arg1, arg2] = arr;//SyntaxError: Rest element must be last element
}
//rest运算符和对象解构相关的内容
{
  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
  console.log(x, y, z)

}

//rest运算符代替arguments处理函数参数
{
  function foo(...arg) {
    for (let item of arg) console.log(item)
  }
  foo(1, 2, 3, 4, 5, 6,)

}

//箭头函数
{
  const foo = v => v;
  //等同于传统语法
  var foo = function (v) {
    return v;
  }
}
{
  const fn = (num1, num2) => num1 + num2;
  console.log(fn(1, 2))
}
{
  console.log([1, 2, 3].map(r => r * 2));
  console.log([1, 2, 3].map(function (r) { return r * 2; }))
}


{
  // 箭头函数的特点
  console.log([1, 2, 3, 4].reduce((x, y) => x + y, 0))
  console.log([1, 4, 6, 5, 3, 2].sort((x, y) => x - y));
  console.log([1, 2, 4, 5, 6, 3].filter(x => x > 3))

}

//箭头函数的this
{
  let time2, time1;
  function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    time2 = setInterval(() => this.s1++, 1000)
    time1 = setInterval(function () {
      console.log(this.s2)
      this.s2++
    }, 1000)
  }
  let timer = new Timer;
  setTimeout(() => console.log("s1:", timer.s1), 3100)
  setTimeout(() => console.log("s2:", timer.s2), 3100)
  clearInterval(time2)
  clearInterval(time1)
}
{
  //箭头函数中不会创建自己的this，而是会从自己作用域链的上一层继承this
  const Person = {
    "name": "kang",
    "age": 18,
    "sayHello": function () {
      setTimeout(() => {
        console.log("我叫：" + this.name + "，我今年：" + this.age + "岁！")
      }, 1000)
    }
  }
  Person.sayHello();
  const Person1 = {
    "name": "little bear",
    "age": 18,
    "sayHello": () => {
      setTimeout(() => console.log("我叫：" + this.name + "，我今年" + this.age + "岁！"), 1000)
    }
  }
  Person1.sayHello();
}
//箭头函数不绑定arguments
try {
  const fn = () => console.log(arguments);// ReferenceError: arguments is not defined
  fn(1, 2)
} catch (err) { console.log(err) }

//箭头函数的嵌套
{
  const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val)
  const plus1 = a => a + 1;
  const mult2 = a => a * 2;
  const addThenMult = pipeline(plus1, mult2)
  console.log(addThenMult(5))
}
//箭头函数没有prototype
{
  let a = () => { return 1; };
  console.log(a.prototype);//undefined
}



//Symbol的使用
{
  let PROP_NAME = Symbol();
  let obj = {}
  obj[PROP_NAME] = "hello";//写法一
  let obj1 = { [PROP_NAME]: "kang" };//写法二
  let obj2 = {}
  Object.defineProperty(obj, PROP_NAME, { value: "turnip" });//写法三
  let s1 = Symbol("turnip");
  console.log(s1.toString());
}
// Symbol案例
{
  let shapeType = {
    triangle: Symbol("triangle"),
    rectangle: Symbol("rectangle")
  };
  function getArea(shape, options) {
    let area = 0;
    switch (shape) {
      case shapeType.triangle:
        area = 0.5 * options.width * options.height;
        break;
      case shapeType.rectangle:
        area = options.width * options.height;
        break;
    }
    return area;
  }
  console.log(getArea(shapeType.triangle, { width: 100, height: 100 }))
  console.log(getArea(shapeType.rectangle, { width: 100, height: 100 }))
}
{
  let obj = {
    [Symbol("name")]: "hello",
    age: 18,
    title: "Engineer"
  }
  console.log(Object.keys(obj))
  for (let i in obj) {
    console.log(i)
  }
  console.log(Object.getOwnPropertyNames(obj))
  console.log(JSON.stringify(obj))
  console.log(Object.getOwnPropertySymbols(obj));
  console.log(Reflect.ownKeys(obj))
}