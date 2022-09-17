// 1,await跟上表达式
function requestData() {
  return new Promise((resolve, reject) =>
    setTimeout(() =>
      // reject("kkk")
      resolve("ttt")
      , 2000)
  )
}

// async function foo() {
//   const res1 = await requestData()
//   console.log("后面的代码1", res1)
//   console.log("后面的代码2")
//   console.log("后面的代码3")
//   const res2 = await requestData()
//   console.log("res2后面的代码", res2)
// }


// 2,跟上其他值
async function foo() {
  const res1 = await 123;//普通的值会直接返回
  const res2 = await {
    then(resolve, reject) {
      resolve("kang")
    }
  }
  const res3 = await new Promise(resolve => resolve("turnip"))
  console.log("res1", res1)
  console.log("res2", res2)
  console.log("res3", res3)
}


// async function foo() {
//   const res1 = await requestData();
//   console.log("res1", res1)
// }
foo().catch(err => console.log("err:", err))