// 创建多个Promise
const p1 = new Promise((resolve, reject) => { setTimeout(() => { resolve("kkkk") }, 1000) })
const p2 = new Promise((resolve, reject) => { setTimeout(() => { reject("aaaa") }, 2000) })
const p3 = new Promise((resolve, reject) => { setTimeout(() => { resolve("nnnn") }, 3000) })
Promise.allSettled([p1, p2, p3]).then(res => console.log(res)).catch(err => console.log(err))