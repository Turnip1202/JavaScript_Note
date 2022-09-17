// 运算符
var num = 0;
num++;
var count = ++num + num + ++num;//先将各表达式返回值算出，然后进行运算
console.log(count);


var x = -10;
x = +x;
// 相当于
// var x = 0 -10;
// x = 0 + x;
console.log(x);//-10
console.log((5 / 0) === (5 / -0));//false


var t = 1;
var k = ++t - + + + -t;
console.log(t);//2