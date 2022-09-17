let arr = []
arr.toString = function () {
  console.log("执行了toString函数")
  return [];
}
arr.valueOf = function () {
  console.log("执行了valueOf函数")
  return [];
}
// console.log(String(arr))
console.log(Number(arr))