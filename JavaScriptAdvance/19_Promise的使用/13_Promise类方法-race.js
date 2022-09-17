// 创建多个Promise
const p1 = new Promise((resolve, reject) => { setTimeout(() => { resolve("kkkk") }, 1000) })
const p2 = new Promise((resolve, reject) => { setTimeout(() => { reject("aaaa") }, 2000) })
const p3 = new Promise((resolve, reject) => { setTimeout(() => { resolve("nnnn") }, 3000) })


// race
// 只要有一个Promise变成fulfilled状态，就结束
Promise.race([p1, p2, p3]).then(res => console.log(res)).catch(err => console.log(err))