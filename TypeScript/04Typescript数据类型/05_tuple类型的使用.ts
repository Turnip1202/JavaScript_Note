// toule元组：多种元素的组合
// "turnip" 19  1.88
// 1.数组的弊端
// const info: any[] = ["turnip", 18, 1.88];
// const infoObj = {
//   name: "turnip",
//   age: 19,
//   height: 1.88
// }
// const name = info[0]
// console.log(name.length)


const info: [string, number, number] = ["turnip", 19, 1.88]
const name = info[0];
console.log(name.length);

export { }






