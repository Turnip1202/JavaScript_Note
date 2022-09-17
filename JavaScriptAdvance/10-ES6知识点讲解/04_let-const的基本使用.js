// var foo = "foo"
// let bar = "bar"

// const ➡ constant(永恒的)
const name = "abc"
// name = "cba";

// 注意事项一：const本质上是传递的值不可以修改
// 但是如果传递的是一个引用类型（内存地址），
// 则可以通过引用找到对应的对象，修改对象内部的属性，
const obj = {
  foo: "foo"
}

// obj = {}
obj.foo = "aaa"
console.log(obj.foo)



// 注意事项二:  通过let/const定义的变量名不可以重复定义
// var foo = "abc"
// var foo = "cba"

let foo = "abc"
// Identifier 'foo' has already been declared
let foo = "cba"
