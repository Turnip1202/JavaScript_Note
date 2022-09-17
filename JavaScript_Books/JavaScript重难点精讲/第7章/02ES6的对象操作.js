
// ES6对于对象的扩展
// 对象属性的简写
{
  const name = "turnip"
  const age = 12;
  const obj = {
    name, age,
    getName() { return this.name }
  };
  console.log(obj)
}

//对象的遍历
{
  //定义父类
  function Animal(name, type) {
    this.name = name;
    this.type = type;
  }
  //定义子类
  function Cat(age, weight) {
    this.age = age;
    this.weight = weight;
    this[Symbol("turnip")] = "kang"
  }
  //子类继承父类
  Cat.prototype = new Animal;
  Cat.prototype.constructor = Cat;
  //生成子类的实例
  let cat = new Cat(12, "10kg");
  //是咧增加可枚举属性
  Object.defineProperty(cat, "color", {
    configurable: true,
    enumerable: true,
    value: "blue",
    writable: true
  });
  //实例增加不可枚举属性
  Object.defineProperty(cat, "height", {
    configurable: true,
    enumerable: false,
    value: "20cm",
    writable: true
  });
  // for ... in 遍历自身和继承的可枚举属性（不包含Symbol）
  let result = []
  for (let key in cat) result.push(key)
  console.log(result);
  // Object.keys 遍历对象自身所有可枚举属性，不包含继承属性和Symbol
  let key = Object.keys(cat);
  console.log(key);
  // Object.getOwnPropertyNames 遍历自身所有可枚举属性和不可枚举属性，不包含继承的属性和Symbol
  let key1 = Object.getOwnPropertyNames(cat);
  console.log(key1);
  //Object.getOwnPropertySymbols  白能力自身的Symbol
  let key2 = Object.getOwnPropertySymbols(cat)
  console.log(key2);
  // Reflect.ownKeys  遍历可枚举属性、不可枚举属性以及Symbol属性，不包含继承属性
  let key3 = Reflect.ownKeys(cat);
  console.log(key3)
}

// Object.assign 无法复制对象的不可枚举属性和继承属性，但可以复制可枚举的Symbol
{
  let obj = Object.create({ a: 1 }, { b: { value: 2 }, c: { value: 3, enumerable: true }, [Symbol("turnip")]: { value: "kang", enumerable: true } })
  console.log(Object.assign({}, obj))

  //给对象添加属性
  function Person(name, age, address) {
    this.name = name; this.age = age; this.address = address;
  }
  function Person(name, age, address) {
    Object.assign(this, { name, age, address })
  }

  //合并对象
  //合并到目标对象
  const merge = (target, ...sources) => Object.assign(target, ...sources);
  const merge2 = (...sources) => Object.assign({}, ...sources)
}


