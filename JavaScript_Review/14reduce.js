const array = [1, 2, 3, 4,5];
let result = array.reduce((acc, curr, idx, arr) => acc + curr,10);//可以手动设置初始值
console.log(result);

// reduce高阶用法
let str = 'adfasfhasohdfkjashidfhiashfiu'
let arr = str.split('');
let res = arr.reduce((acc, curr, idx) => {
  if (acc[curr]) {
    acc[curr]++
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});//{}是acc的初始值
console.log(res)