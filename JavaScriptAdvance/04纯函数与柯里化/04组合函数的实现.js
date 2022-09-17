//组哈函数：将函数从左到右嵌套
//即将左边的函数执行并传入到右边函数


function tkCompose(...fns) {
  var length = fns.length;//有几个要合并的函数
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== "function")//不是函数抛出异常
      throw new TypeError("Expected atguments are functions")
  }
  //合并函数
  return function compose(...args) {
    var index = 0;
    //还有函数，则将下一个函数作为参数传入到上一个函数
    var result = length ? fns[index].apply(this, args) : args;
    while (++index < length) {
      result = fns[index].call(this, result)
    }
    return result;
  }

}


function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

var newFn = tkCompose(double, square)
console.log(newFn(10))
