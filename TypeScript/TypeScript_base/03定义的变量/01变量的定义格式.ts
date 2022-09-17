// 类型注释
// var/let/const
// 3.string和String区别
// 4.类型推导
var name: string = "trunip"
let age: number = 18
const height: number = 1.88;
// string:TypeScript中的字符串类型
// String:JavaScript的字符串包装类的类型
const message: string = "Hello World"
//默认情况下进行赋值时，会将赋值的值的类型，作为前面标识符的类型
//这个过程称之为类型推导/推断
// foo没有添加类型注释
let foo = "foo";// 类型推导为
// foo = 123

export { }