//短路运算符
// //短路&&
// var x = 2;
// var y = 3;
// var z = y > x && x;
// //左边为真执行右边返回值；左边为假，执行左边的返回值，不再执行右边
// console.log(z);//2
// z=y < x && x+1;
// console.log(z);//false

//短路||
var x = 2;
var y = 3;
var z = y > x || x;
//左边为真执行左边返回值，不再执行右边；左边为假，执行右边的返回值
console.log(z);//true
z=y < x || x;
console.log(z);//2

