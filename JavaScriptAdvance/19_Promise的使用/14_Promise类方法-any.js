//any会等到一个fulfilled的状态，才会决定Promise的状态
// 如果所有的Promise均为reject的


// 创建多个Promise
const p1 = new Promise((resolve, reject) => { setTimeout(() => { reject("kkkk") }, 1000) })
const p2 = new Promise((resolve, reject) => { setTimeout(() => { reject("aaaa") }, 2000) })
const p3 = new Promise((resolve, reject) => { setTimeout(() => { reject("nnnn") }, 3000) })


//均为reject时，会打印[AggregateError: All promises were rejected]
Promise.any([p1, p2, p3]).then(res => console.log(res)).catch(err => console.log(err.errors))