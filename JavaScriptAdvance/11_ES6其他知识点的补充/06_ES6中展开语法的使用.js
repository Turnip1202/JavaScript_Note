const names = ["abc", "cba", "nba"]
const name = "turnip"
const info = {
  name: "tuirnip",
  age: 19
}
// 1，函数调用时
function foo(x, y, Z) {
  console.log(x, y, Z)
}
foo.apply(null, names)

foo(...names);
foo(...name);

// 2,构造数组时
const newNames = [...names, ...name]
console.log(newNames)


// 3,构造对象字面量时ES2018（ES9）
const obj = { ...info, address: "广州市", ...names }
console.log(obj)