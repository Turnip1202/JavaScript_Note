// 算法1
function findMost1(arr) {
  if (!arr.length) return;
  if (arr.length === 1) return 1;
  let res = {}
  //遍历数组
  for (let i = 0, len = arr.length; i < len; i++) {
    if (!res[arr[i]]) { res[arr[i]] = 1 }
    else { res[arr[i]]++; }
  }
  let keys = Object.keys(res)
  let maxNum = 0, maxEle = null;
  for (let i = 0, len = keys.length; i < len; i++) {
    if (res[keys[i]] > maxNum) {
      maxNum = res[keys[i]]
      maxEle = keys[i]
    }
  }
  return `出现次数最多的元素为${maxEle},出现次数为${maxNum}`;
}
let arr1 = [3, 5, 6, 5, 9, 8, 10, 5, 7, 7, 10, 7, 7, 10, 10, 10, 10, 10]
console.log(findMost1(arr1))

//算法2
function findMost2(arr) {
  let h = {};
  let maxNum = 0;
  let maxEle = null;
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    h[a] === undefined ? h[a] = 1 : (h[a]++)
    if (h[a] > maxNum) {
      maxEle = a;
      maxNum = h[a]
    }
  }
  return `出现次数最多的元素为：${maxEle},出现次数为${maxNum}`;
}
let arr2 = [3, 5, 6, 5, 9, 8, 10, 5, 7, 7, 10, 7, 7, 10, 10, 10, 10, 10]
console.log(findMost2(arr2))

//算法3
function findMost3(arr) {
  let maxEle = null;
  let maxNum = 1;
  let obj = arr.reduce((p, k) => {
    p[k] ? p[k]++ : p[k] = 1
    if (p[k] > maxNum) {
      maxEle = k;
      maxNum++
    }
    return p
  }, {});
  return `出现次数最多的元素${maxEle},次数为${obj[maxEle]}`
}
let arr3 = [3, 5, 6, 5, 9, 8, 10, 5, 7, 7, 10, 7, 7, 10, 10, 10, 10, 10];
console.log(findMost3(arr3));

//算法4（利用逗号运算符）
Array.prototype.getMost4 = function () {
  let obj = this.reduce((p, n) => (p[n]++ || (p[n] = 1), (p.max = p.max >= p[n] ? p.max : p[n]),
    (p.key = p.max > p[n] ? p.key : n), p), {})
  return `出现次数最多的元素${obj.key},次数为${obj.max}`
}
let arr4 = [3, 5, 6, 5, 9, 8, 10, 5, 7, 7, 10, 7, 7, 10, 10, 10, 10, 10];
console.log(arr4.getMost4());

