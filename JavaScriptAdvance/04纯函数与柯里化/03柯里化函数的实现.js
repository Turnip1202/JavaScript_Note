function add1(x, y, z) {
  return x + y + z;
}
function add2(x, y, z) {
  x = x + 2;
  y = y * 2;
  z = z * 2;
  return x + y + z;
}

function makeAdder(count) {//柯里化函数
  count = count * count;
  return function (num) {
    return count + num
  }
}


function log(date, type, message) {//日志
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}:[${message}]]`)
}
log((new Date()), "DUBGE", "语法错误");





// 柯里化函数的实现
function tkCurrying(fn) {
  // 思路：柯里化是连续返回函数让原函数的参数分解传入。
  // 1.获取原函数参数的个数fn.length
  // 2.对比原函数参数与导函数的参数

  //1.返回一个函数，分批传入参数
  return function curried(...args) {
    //对比参数个数
    if (args.length >= fn.length) {//参数分解完成
      // 执行函数
      return fn.apply(this, args);
    }
    else {//还有参数没有分解完
      //返回一个函数继续执行接收剩余参数，同时要合并原有参数，一并传入
      return function curried1(...args1) {
        //合并参数，递归调用
        // return curried([...args, ...args1])
        return curried.apply(this, args.concat(args1));
        // return curried.apply(this, [...args,...args1])
      }
    }
  }
}
tkCurrying(add1)(20, 30, 40)