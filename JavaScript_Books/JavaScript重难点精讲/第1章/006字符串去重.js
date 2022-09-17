//算法1
function removeDuplicateChar1(str) {
  let result = []
  let json = {}
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (!json[char]) {
      json[char] = true
      result.push(char);
    }
  }
  return result.join('');
}
let str = "helloJavaScripthellohtmphellocss"
let result1 = removeDuplicateChar1(str)
console.log(result1)

//算法2
function removeDuplicateChar2(str) {
  //使用call函数改变filter函数的执行主体
  return Array.prototype.filter.call(str, (char, index, arr) => arr.indexOf(char) === index).join('');

}
let result2 = removeDuplicateChar2(str)
console.log(result2)



// 算法3
//利用Set的特性，进行数组去重
function removeDuplicateChar3(str) {
  let set = new Set(str.split(''));

  return [...set].join('')
}
let result3 = removeDuplicateChar3(str)
console.log(result3)