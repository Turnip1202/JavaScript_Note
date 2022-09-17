"use strict";
var isDone = false;
var createdByNewBoolean = new Boolean(1);
var cteatedByBoolean = Boolean(1);
//菜鸟·教程
// any类型
var anyVariety = "turnip";
//数字类型
var binaryLiteral = 10; //二进制
var octalLiteral = 484; // 八进制
var deLiteral = 6; //十进制
var hexLiteral = 0xf00d; //十六进制
//字符串类型
var name_ = "turnip";
var years = 5;
var words = "\u4F60\u597D\uFF0C".concat(name_, ",\u5DF2\u7ECF").concat(years, "\u5E74\u4E86");
var flag = true;
//数组类型
//元素类型后面加上[]
var arr1 = [1, 2];
//火车使用数组泛型
var arr2 = [1, 2];
//元组
var x;
x = ["turnip", 1];
// x = [1, "turnip"];//报错
console.log(x[0]); //输出turnip
//枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
function hello() {
    alert("turnip");
}
//null类型
var Vnull = null;
//undefined类型
var Vundefined = undefined;
// never类型
// let Vnever: never = (() => { throw new Error("exception") })();
//Any类型详解
//any类型的值可以动态改变
var y = 1;
y = "I am turnip";
y = false;
// y.ifitExists();//编译正确,ifItExists方法在运行时间可能存在,但这里并不会检查
// y.toFixed();
//定义各种类型数据的数组
var arrayList = [1, false, "fine"];
arrayList[1] = 100;
// Null和 Undefined
//启用--strictNullChecks
var z;
z = 1;
// z = undefined;//编译错误
// z = null;//编译错误
var g;
g = 1;
g = undefined;
g = null;
// never类型
var k;
var t;
// k = 123;//编译错误
// t = (() => { throw new Error("exception") })();//never类型可以被赋值给数字类型
//返回值为never的函数可以抛出异常的情况
function error(message) {
    throw new Error(message);
}
//返回值为never的函数是无法被执行到的终点的情况
function loop() {
    while (true) { }
}
//变量的声明
//类型断言
var str = "1";
var str2 = str;
console.log(str2);
//类型推断
var num = 2; //类型推断为number
console.log("num变量的值为" + num);
// num = "12";//编译错误
console.log(num);
// 变量作用域
var global_num = 12; //全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //局部变量
    };
    Numbers.sval = 10; //静态变量
    return Numbers;
}());
;
console.log("全局变量:" + global_num);
console.log(Numbers.sval); //静态变量
var obj = new Numbers();
console.log("实例变量:" + obj.num_val);
//算术运算符
var num1 = 10;
var num2 = 2;
var res = 0;
res = num1 + num2;
console.log("加: " + res);
res = num1 - num2;
console.log("减: " + res);
res = num1 * num2;
console.log("乘: " + res);
res = num1 / num2;
console.log("除: " + res);
res = num1 % num2;
console.log("取余: " + res);
num1++;
console.log("num1 自增运算:" + num1);
num2--;
console.log("num2 自减运算:" + num2);



