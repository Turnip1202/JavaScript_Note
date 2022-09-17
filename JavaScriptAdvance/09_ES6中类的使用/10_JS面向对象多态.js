// 多态：当对不同的数据类型执行同一个操作时，如果表现出来的行为（形态）不一样，那么就是多态的体现
function calcArea(foo) {
  console.log(foo.getArea())
}

//简化打印
Object.prototype.log = function () {
  console.log(this)
}

let Obj1 = {
  name: "turnip",
  getArea: function () {
    return 1000;
  }
}

class Person {
  getArea() {
    return 100;
  }
}

let p = new Person();
//利用js的灵活性，可以实现多态。但不满足传统意义的多态定义
//无继承，无重写，无引用
calcArea(Obj1);
calcArea(p);

//事实上，下面也是多态
function sum(m, n) {
  return m + n;
}
sum(20, 30).log();
sum("abc", "cba").log()