//构造函数创建对象，可以产生对象名。
//但是





//规范：构造函数的首字母一般大写
function Person(name, age, height, adress) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.adress = adress;
  this.eating = function () {
    console.log(this.name + "在吃东西~");
  };
  this.running = function () {
    console.log(this.name + "在跑步~");
  };
};

let p1 = new Person("张三", 18, 1.88, "广州市");
let p2 = new Person("李四", 20, 1.98, "北京市");
console.log(p1);
console.log(p2);
p1.eating();
p2.eating();
