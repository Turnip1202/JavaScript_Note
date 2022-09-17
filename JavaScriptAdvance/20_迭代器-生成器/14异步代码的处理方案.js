// request.js
function requestData(url = "http://turnip.ren") {
  //异步请求的代码会被放到executor中
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(url), 2000)
  })
}

// 需求：
//1,url:turnip->res:turnip
// 2，url:res+"aaa" ->res:kangaaa
// 3.url:res+"bbb" -> kangaaabbb

// 第一种方案： 多次回调(回调地狱)
requestData("turnip").then(
  res => requestData(res + "aaa").then(
    res => requestData(res + "bbb").then(res => console.log(res))
  )
)

//第二种方案：Promise中的then的返回值来解决
requestData("turnip").then(res => requestData(res + "aaa"))
  .then(res => requestData(res + "bbb"))
  .then(res => console.log(res))


// 第三种方案：Promise+generator实现
function* getData() {
  const res1 = yield requestData("turnip");
  const res2 = yield requestData(res1 + "aaa")
  const res3 = yield requestData(res2 + "bbb")
  console.log(res3)
}
//这种方案需要手动执行，或者封装自执行函数
// 1，手动执行
const generator = getData();
generator.next().value.then(res =>
  generator.next(res).value.then(res =>
    generator.next(res).value.then(res =>
      generator.next(res)))
)
// 2, 自己封装自执行函数
function execGenerator(genFn) {
  const generator = genFn();
  function exec(res) {
    const result = generator.next(res);
    if (result.done) return result.value
    result.value.then(res =>
      exec(res))
  }
  exec()
}

execGenerator(getData)


// 3> 第三方包co自动执行
// TJ: co/n(nvm)/commander(coderwhy/vue cli)/express/koa(egg)
// const co = require('co')
// co(getData)


// 第四种方案
async function getData1() {
  const res1 = await requestData("turnip");
  const res2 = await requestData(res1 + "aaa")
  const res3 = await requestData(res2 + "kkk")
  console.log(res3)
}
getData1();