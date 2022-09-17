// 1,||= 逻辑或赋值运算符
let message = "hellow world"
message = message || "default value"
message ||= "default value"
console.log(message);


// 2,&&= 逻辑与赋值运算符
const obj = {
  name: "turnip",
  foo: function () {
    console.log("foo函数被调用")
  }
}


obj.foo && obj.foo()

let info = {
  name: "turnip"
}
// 1,判断info
// 2，有值的情况下，取出info.name
const bar = info && info.name;
info &&= info.name;//有些微不同
console.log(bar)


// 3, ??= 逻辑空赋值运算符
let messages = 0;
messages ??= "default value"
console.log(messages)
