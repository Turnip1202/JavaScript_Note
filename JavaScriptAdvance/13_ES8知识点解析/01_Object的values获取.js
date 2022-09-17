const obj = {
  name: "turnip",
  age: 19
}
console.log(Object.keys(obj));//获取key键
console.log(Object.values(obj));//获取value值

// 用的极少
console.log(Object.values(["abc", "cba", "nba"]));// 返回传入的数组
console.log(Object.values("abc"));//["a", "b", "c"]
