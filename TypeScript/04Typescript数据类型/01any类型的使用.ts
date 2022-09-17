//不推荐使用any类型，
let message: any = "hello world"
message = 123;
message = true;
message = {}
console.log(message)
const arr: any[] = [];//数组中尽量使用相同的数据类型
export { }