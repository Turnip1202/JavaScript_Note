// 获取当前环境下的全局对象（Global Object）
// ES11之前


//浏览器中
console.log(window)
console.log(this)

//在node中
console.log(global)

// ES11之后
console.log(globalThis === global)