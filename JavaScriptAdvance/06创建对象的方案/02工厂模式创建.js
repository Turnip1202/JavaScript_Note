//工厂模式解析：创建工厂函数，在函数内部生成并创建对象
//弊端：生成的对象均为无名对像。不易区分
function createPerson(name, age, height, adress) {
  var p = {};
  p.name = name;
  p.age = age;
  p.height = height;
  p.adress = adress;
  p.eating = function () {
    console.log(this.name + "在吃东西~");
  };
  p.running = function () {
    console.log(this.name + "在跑步~");
  };
  return p;
};

let p1 = createPerson("张三", 18, 1.88, "广州市");
let p2 = createPerson("李四", 20, 1.98, "上海市");
let p3 = createPerson("王五", 30, 1.78, "北京市");

console.log(p1)
