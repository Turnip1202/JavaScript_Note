let obj = {
  name: "turnip",
  age: 18
}
Object.defineProperty(obj, "address", {
  value: "北京市",
  enumerable: true  //默认不可枚举；浏览器内，不可枚举也会显示（颜色较灰）
})

console.log(obj);