function padLeft(num) { //数字补零函数
  return String(num)[1] && String(num) || '0' + num;
}


//不定参数
function getSum() { 
  for (let i = 0; i < arguments.length; i++)
    console.log(arguments[i]);//值可以修改
}
getSum(1, 2, 3, 4, 5, 6);



function push(arr) { 
  var arr = Array.isArray(arguments[0] && arguments[0] || []);//是数组，返回此数组；否则，返回空数组
  var argLen = arguments.length;
  for (let i = 1; i < argLen; i++)
  arr[ arr.length]=arguments[i]
  return arr;
  
}
console.log(push([1,2,3],4,5,6))
















module.exports = { padLeft }