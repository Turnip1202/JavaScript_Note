//this可以使函数 很方便的使用它的所属对象上的属性


let obj100 = {
  name: "turnip",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  },
  studying: function () {
    console.log(this.name + "在学习");
  }
};

let info = {
  name: "kang",
  eating: function () {
    console.log(this.name + "在吃东西")
  },
  running: function () {
    console.log(this.name + "在跑步")
  },
  studying: function () {
    console.log(this.name + "在学习")
  }
};

let person = {
  name: "yu",
  eating: function () {
    console.log(this.name + "在吃东西")
  },
  running: function () {
    console.log(this.name + "在跑步")
  },
  studying: function () {
    console.log(this.name + "在学习")
  }
}
obj100.eating();
obj100.running();
obj100.studying();