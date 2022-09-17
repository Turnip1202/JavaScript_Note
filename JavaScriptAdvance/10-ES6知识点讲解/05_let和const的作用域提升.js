// 作用域提升：可以提前访问
console.log(foo)
var foo = "foo"

// ReferenceError:Cannot access "bar" before initialization
// let/const 没有作用域提升
// bar被创建出来了，只是不可以提前访问
console.log(bar)
let bar = "bar"