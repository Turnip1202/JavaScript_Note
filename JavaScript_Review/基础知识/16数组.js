//检测
var arr = [1, 2, 3,4,false,null,undefined,false, [4, 5, 6]];
console.log(typeof arr);
console.log(arr instanceof Array);
console.log(Array.isArray(arr))


//类型转换
console.log(typeof arr.toString());//String
console.log(Number(arr));//NaN
console.log([] == []);//对象类型和自身不相等
console.log(arr + 'turnip')//1,2,3turnip
console.log([] + []);//''
console.log([2] - 1);//1
console.log([3,] - 1);//2
console.log([1,2] - 1);//NaN
console.log(!![]);//true

console.log(arr.join('-'))


