// 算法1
Array.prototype.min = function () {
  let min = this[0];
  let len = this.length;
  for (let i = 1; i < len; i++) {
    if (this[i] < min) min = this[i]
  }
  return min;
}
Array.prototype.max = function () {
  let max = this[0];
  let len = this.length;
  for (let i = 1; i < len; i++) {
    if (this[i] > max) max = this[i]
  }
  return max;
}

let arr = [2, 3, 10, 7, 5, 8, 6];
console.log(arr.min());
console.log(arr.max());


//算法2
Array.max = function (array) {
  return Math.max.apply(Math, array);
}
Array.min = function (array) {
  return Math.min.apply(Math, array);
}
console.log(Array.min(arr))
console.log(Array.max(arr))

//算法3
let arr3 = [2, 3, 10, 7, 5, 8, 6];
Array.prototype.min = function () {
  return Math.min.apply({}, this)
}
Array.prototype.max = function () {
  return Math.max.apply({}, this)
}
console.log(arr3.min())
console.log(arr3.max())

//算法4
Array.prototype.min = function () { return this.reduce((preValue, curValue) => preValue > curValue ? curValue : preValue) }
Array.prototype.max = function () { return this.reduce((preValue, curValue) => preValue < curValue ? curValue : preValue) }
let arr4 = [2, 4, 10, 7, 5, 8, 6]
console.log(arr4.min())
console.log(arr4.max())

//算法5
let sortFn = (a, b) => a - b;
let arr5 = [2, 4, 10, 7, 5, 8, 6];
let sortArr = arr5.sort(sortFn);
console.log(sortArr[0]);
console.log(sortArr[sortArr.length - 1]);


//算法5
let arr6 = [2, 4, 10, 7, 5, 8, 6];
console.log(Math.min(...arr6));
console.log(Math.max(...arr6));
