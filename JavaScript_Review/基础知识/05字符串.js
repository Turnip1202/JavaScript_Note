//字符串类型
//length是只读属性
//下标方式只能读取，无法修改。相当于内置了方法进行切割读取，但不可修改
var str = 'Turnip';
str.length = 3;
str[0] = 'K';
console.log(str.length);
console.log(str[0]);