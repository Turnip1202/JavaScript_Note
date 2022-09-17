let arr1 = [11, 22, 33]
for (let i = 0, len = arr1.length; i < len; i++)console.log(arr1[i]);

let arr2 = [11, 22, 33]
arr2.forEach((element, index, array) => console.log(element))

// 下面几个函数的polyfill基本思路大体都一致
// 使用for遍历，满足对应条件后将数据返回，或者处理数据


//forEach函数兼容性处理
Array.prototype.T_forEach = Array.prototype.forEach ??
  function (fn, context_this) {
    // 内部使用for遍历
    for (let k = 0, length = this.length; k < length; k++) {
      // 判断传入的是否是函数，若是，则将遍历的结果传入
      if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
        fn.call(context_this, this[k], k, this);
      }
    }
  }
let arr = [1, 2, 3]
arr.T_forEach(item => console.log(item));

let arr3 = [1, 2, 3]
let arrayOfSquares = arr3.map((element) => element * element);
console.log(arrayOfSquares);

//map的polyfill
Array.prototype.T_map = Array.prototype.map ??
  function (fn, context_this) {
    let arr = []
    if (typeof fn === "function") {
      for (let k = 0, length = this.length; k < length; k++) {
        if (typeof fn === "function"
          && Object.prototype.hasOwnProperty.call(this, k)
        ) {
          arr.push(fn.call(context_this, this[k], k, this))
        }
      }
    }
    return arr;
  };

//手写filter
Array.prototype.T_filter = Array.prototype.filter ??
  function (fn, context_this) {
    let arr = [];
    if (typeof fn === "function") {
      for (let k = 0, length = this.length; k < length; k++) {
        if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
          fn.call(context_this, this[k], k, this) && arr.push(this[k]);
        }
      }
    }
    return arr;
  }


let arr4 = [1, 2, 3]
let result = arr4.T_filter((item) => item < 3)
console.log(result)

function isBigEnough(element, index, array) {
  return element > 4;
}
//测试some函数
let passed1 = [1, 2, 3, 4].some(isBigEnough)
let passed2 = [1, 2, 3, 4, 5].some(isBigEnough)
console.log(passed1);
console.log(passed2);
//测试every函数
let passed3 = [2, 3, 4].every(isBigEnough)
let passed4 = [5, 6].every(isBigEnough)
console.log(passed3)
console.log(passed4)
// some函数兼容性处理
Array.prototype.T_some = Array.prototype ??
  function (fn, context_this) {
    let passed = false;
    if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
      for (let k = 0, lengh = this.length; k < length; k++) {
        if (passed === true) break;
        passed = !!fn.call(context_this, this[k], k, this)
      }
    }
    return passed;
  };
// every函数兼容性处理
Array.prototype.every = Array.prototype.every ??
  function (fn, context_this) {
    let passed = true;
    if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
      for (let k = 0, length = this.length; k < length; k++) {
        if (passed === false) break;
        passed = !!fn.call(context_this, this[k], k, this)
      }
    }
    return passed;
  };

// reduce的兼容性处理
Array.prototype.T_reduce = Array.prototype.reduce ??
  function (callback, initialValue) {
    let previous = initialValue, k = 0, length = this.length;
    if (typeof initialValue === "undefined") {
      previous = this[0];
      k = 1;
    }
    if (typeof callback === "function") {
      for (k; k < length; k++) {
        this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this))
      }
    }
    return previous;
  }

let value1 = [1, 5, 10, 15].find((element, index, array) => {
  return element > 9;
})
let value2 = [1, 5, 10, 15].find((element, index, array) => {
  return element > 20
})
console.log(value1)
console.log(value2)

//find的polyfill
Array.prototype.T_find = Array.prototype.find ??
  function (fn, context_this) {
    if (typeof fn === "function") {
      for (let k = 0, length = this.length; k < length; k++) {
        if (fn.call(context_this, this[k], k, this)) return this[k]
      }
    }
    return undefined;
  }