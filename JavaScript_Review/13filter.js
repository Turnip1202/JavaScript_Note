var arr = [2, 3, 5, 6, 35];
// var newArr = arr.filter(item => item < 3);
// console.log(newArr)
// 手写filter
Array.prototype.Tfilter = function (callback) {
  var nw = [];
  for (var i = 0; i < this.length; i++) { 
    if (callback(this[i], i, this)){ 
      nw.push(this[i]);
    }
    return nw;
  }
}
var newArr = arr.Tfilter(function(item,index,arr) {return item< 3});
console.log(newArr)
