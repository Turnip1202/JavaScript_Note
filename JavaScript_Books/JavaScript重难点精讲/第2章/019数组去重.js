//算法1
function arrayUnique(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {//找不到
      result.push(array[i]);
    }
  }
  return result;
};
let array = [1, 4, 5, 7, 4, 8, 1, 10, 4];
console.log(arrayUnique(array));

// 算法2
function arrayUnique2(array) {
  let obj = {}, result = [], val = null, type = null;
  for (let i = 0; i < array.length; i++) {
    val = array[i];
    if (!obj[val]) {//存在，则放进去
      obj[val] = "yes";
      result.push(val)
    }
  }
  console.log(obj)
  return result;
}
let array2 = [1, 4, 5, 7, 4, 8, 1, 10, 4]
console.log(arrayUnique2(array2));

// 算法2优化
function arrayUnique2_s(array) {
  let obj = {}, result = [], val = null; type = null;
  for (let i = 0; i < array.length; i++) {
    val = array[i];
    type = typeof val;
    if (!obj[val]) {
      obj[val] = [type];
      result.push(val);
    } else if (obj[val].indexOf(type) < 0) {
      obj[val].push(type);
      result.push(val);
    }
  }
  return result;
}
let array2_s = [1, 4, 5, 7, 4, 8, 1, 10, 4, "1"]
console.log(arrayUnique2_s(array2_s))

// 算法3
function arrayUnique3(array) {
  let result = [array[0]];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== result[result.length - 1]) {//一个个添加，添加的元素，都是对比过的
      result.push(array[i])
    }
  }
  return result;
}
let array3 = [1, 4, 5, 7, 4, 8, 1, 10, 4];
console.log(arrayUnique3(array3))

// 算法4
function arrayUnique4(array) {
  let result = [];
  for (let i = 0, len = array.length; i < array.length; i++) {
    for (let j = i + 1; j < len; j++) {
      if (array[i] === array[j]) {
        j = ++i;
      }
    }
    result.push(array[i])
  }
  return result;
}
let array4 = [1, 4, 5, 7, 4, 8, 1, 10, 4]
console.log(arrayUnique4(array4));

//算法5
function arrayUnique5(array) {
  let obj = {}, type = null;
  return array.reduce((preValue, curValue) => {
    type = typeof curValue;
    if (!obj[curValue]) {
      obj[curValue] = [type];
      preValue.push(curValue);
    } else if (obj[curValue].indexOf(type) < 0) {
      obj[curValue].push(type);
      preValue.push(curValue);
    }
    return preValue;
  }, [])
}
let array5 = [1, 4, 5, 7, 4, 8, 1, 10, 4, "1"]
console.log(arrayUnique5(array5));

//算法6
let arrayUnique6 = array => Array.from(new Set(array))
let array6 = [1, 4, 5, 7, 4, 8, 1, 10, 4, "1"]
console.log(arrayUnique6(array6));


//算法7
function arrayUnique7(array) {
  let map = new Map;
  return array.filter((item) => !map.has(item) && map.set(item, 1));
}
let array7 = [1, 4, 5, 7, 4, 8, 1, 10, 4, "1"]
console.log(arrayUnique7(array7));