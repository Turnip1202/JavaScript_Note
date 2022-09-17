//父类
class Animal {
  constructor(type) {
    this.type = type;
  }
}

//子类
class Cat extends Animal {
  constructor(name, type) {
    //优先调用super()函数执 行父类构造函数
    super(type);
    this.name = name;
  }
  getName() {
    return this.name
  }
}

const cat = new Cat("tom", "cat")
console.log(cat.type)
console.log(cat.getName())