let names = ["abc", "cba", "nba"];

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._address = "郑州市"
  }
  //普通的方法
  //由创建出来的对象进行访问
  //let p = new Person();
  // p.eating()
  eating() {
    console.log(this.name + "eating~")
  };
  running() {
    console.log(this.name + "running~")
  }

  //类的访问器方法
  get address() {
    console.log("拦截访问操作");
    return this._address;
  }
  set address(newAddress) {
    console.log("拦截设置操作");
    return this._address = newAddress;
  };
  //类的静态方法（类方法）  可以通过类名.  直接调用
  //Person.createPerson()
  static randomPerson() {
    let nameIndex = Math.floor(Math.random() * names.length);
    let name = names[nameIndex];
    let age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }

}

let p = new Person("turnip", 18);
p.eating();
p.running();

console.log(p.address);
p.address = "周口市";
console.log(p.address);

// console.log(Object.getOwnPropertyDescriptors(Person.prototype))

for (let i = 0; i < 50; i++) {//通过类名直接调用方法
  console.log(Person.randomPerson());
}

