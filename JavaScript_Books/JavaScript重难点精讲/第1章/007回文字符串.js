// 算法1
function isPalindromicString1(str) {
  if (!str?.length) return true;
  str = str.toLowerCase().split('');
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else return false;
  }
  return true
}
let str1 = "turnipinrut";
let str2 = "pinrut";
let result1 = isPalindromicString1(str1)
let result2 = isPalindromicString1(str2)
console.log(result1)
console.log(result2)


// 算法2
// 主要思想和算法一相同，但是采用递归形式
function isPalindromicString2(str) {
  if (!str.length) {
    return true;
  }
  // 字符串统一转换为小写
  str = str.toLowerCase();
  let end = str.length - 1;
  if (str[0] !== str[end]) {
    return false;
  }
  //删除掉字符串的首尾字符，进行递归处理
  return isPalindromicString2(str.slice(1, end));
}
let result3 = isPalindromicString2(str1)
let result4 = isPalindromicString2(str2)
console.log(result3)
console.log(result4)


//算法3
function isPalindromicString3(str) {
  str = str.toLowerCase();
  let arr = str.split('');//将字符串分割为数组
  //将数组倒序，与原数组对比
  let reverseStr = arr.reverse().join('');
  return str === reverseStr;
}
let result5 = isPalindromicString3(str1)
let result6 = isPalindromicString3(str2)
console.log(result5);
console.log(result6);

