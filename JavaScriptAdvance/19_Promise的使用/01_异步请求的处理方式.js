/**
 * 这种回调的方式有很多弊端
 * 1>如果是我们自己封装requrestDate，那么我们在封装的时候必须要自己设计好callback
 * 2>如果我们使用别人封装requestData或者一些第三方库，需要知道别人api的说明，
 */
function requestData(url, successCallback, failtureCallback) {
  setTimeout(() => {
    //拿到请求的结果
    if (url === "turnip") {
      let names = ["abc", "cba", "kang"];
      successCallback(names)
    } else {
      let errMessage = "请求失败，url错误";
      failtureCallback(errMessage)
    }

  }, 3000);
}

// main.js
requestData("turnip", (res) => {
  console.log(res)
}, (error) => { console.log(error) })


