//创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("kkkkk")
  }, 1000)
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => { reject("aaaaa") }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => { resolve("nnnnn") }, 3000)
})

//有一个Promise是rejected，那么整个Promise就是个rejected
Promise.all([p1, p2, p3, "turnip"]).then(res => console.log(res)).catch(err => console.log(err))