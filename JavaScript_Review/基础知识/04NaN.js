console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Infinity);
console.log(-Infinity);

//NaN
var x = 10;
var y = 10 - 'f';
console.log(typeof y === 'NaN');//无法判断
console.log(y === NaN);//无法判断
console.log(isNaN(y));//只能用IsNaN()判断
console.log(1 + NaN);//NaN进行任何的数据运算，均为NaN
// console.log(x + count);// count is not defined
