function foo(num1, num2) {
  // // 1.自己遍历，转换为数组
  // var newArr = []
  // for (var i = 0; i < arguments.length; i++) {
  //   newArr.push(arguments[i])
  // }
  // // return arguments;
  // return newArr;


  // // 2.通过原型使用slice方法
  // var newArr1 = Array.prototype.slice.call(arguments);
  // console.log(newArr1)
  // return newArr1;


  // // 3.通过空数组直接使用slice方法
  // var newArr2 = [].slice.call(arguments);
  // console.log(newArr2);
  // return newArr2


  // ES6语法
  // var newArr3 = Array.from(arguments);
  // console.log(newArr3);
  // return newArr3
  var newArr4 = [...arguments];
  console.log(newArr4)
  return newArr4
}

var result = foo(1, 2, 3, 4, 5, 6)
console.log(result instanceof Array);



// 手写slice
Array.prototype.tkslice = function (start, end) {
  var arr = this;
  start = start || 0;
  end = end || arr.length;
  var newArray = []
  for (var i = start; i < end; i++) {
    newArray.push(arr[i])
  };
  return newArray;
}

var newArray = Array.prototype.tkslice.call(["a", "b", "c"])
console.log(newArray)




