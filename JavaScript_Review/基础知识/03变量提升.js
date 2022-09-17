
// //先声明，后执行
// console.log(x);//undefined
// var x = 10;
// console.log(x);
// x = 20;
// console.log(x);
// var w = 30;
// var y = x + w;
// console.log(y);



// //解释器：翻译。即下述
// //先声明
// var x;//underfined
// var w;//underfined
// var y;//underfined
// //后执行
// console.log(x);//undefined
// x = 10;
// console.log(x);
// w = 30;
// y = x + w;
// console.log(y);