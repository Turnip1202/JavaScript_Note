let p3 = {
  name: "王五",
  age: 38,
  height: 1.78,
  address: "上海市",
  eating: function () {
    console.log(this.name + "吃东西~");
  },
  running: function () {
    console.log(this.name + "在跑步~");
  }
};
let d = Object.getOwnPropertyDescriptors(p3)
console.log(d)
