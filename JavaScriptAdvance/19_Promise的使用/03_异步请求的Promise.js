// request.js
function requestData(url,) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "turnip") {
        let names = ["abc", "cba", "nba"];
        resolve(names)
      } else {
        let errMessage = "请求失败，url错误"
        reject(errMessage)
      }
    }, 3000)
  })
};
// main.js
const promise = requestData("turnip");
promise.then((res) => { console.log("请求成功：", res) }).catch((err) => console.log(err))


