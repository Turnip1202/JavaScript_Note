const isDone: boolean = false;
let createdByNewBoolean: Boolean = new Boolean(1);
let cteatedByBoolean: boolean = Boolean(1);






//菜鸟·教程

// any类型
let anyVariety: any = "turnip"

//数字类型
let binaryLiteral: number = 0b1010;//二进制
let octalLiteral: number = 0o744;// 八进制
let deLiteral: number = 6;//十进制
let hexLiteral: number = 0xf00d;//十六进制

//字符串类型
let name_: string = "turnip"
let years: number = 5;
let words: string = `你好，${name_},已经${years}年了`
let flag: boolean = true;

//数组类型
//元素类型后面加上[]
let arr1: number[] = [1, 2];
//火车使用数组泛型
let arr2: Array<number> = [1, 2];

//元组
let x: [string, number]
x = ["turnip", 1];
// x = [1, "turnip"];//报错
console.log(x[0]);//输出turnip

//枚举类型
enum Color { Red, Green, Blue };
let c: Color = Color.Blue;
console.log(c);

function hello(): void {
  alert("turnip")
}

//null类型
let Vnull: null = null;
//undefined类型
let Vundefined: undefined = undefined;
// never类型
// let Vnever: never = (() => { throw new Error("exception") })();

//Any类型详解
//any类型的值可以动态改变
let y: any = 1;
y = "I am turnip"
y = false;
// y.ifitExists();//编译正确,ifItExists方法在运行时间可能存在,但这里并不会检查
// y.toFixed();
//定义各种类型数据的数组
let arrayList: any[] = [1, false, "fine"]
arrayList[1] = 100;

// Null和 Undefined
//启用--strictNullChecks
let z: number;
z = 1;
// z = undefined;//编译错误
// z = null;//编译错误
let g: number | null | undefined;
g = 1;
g = undefined;
g = null;

// never类型
let k: never;
let t: number;
// k = 123;//编译错误
// t = (() => { throw new Error("exception") })();//never类型可以被赋值给数字类型
//返回值为never的函数可以抛出异常的情况
function error(message: string): never {
  throw new Error(message);
}
//返回值为never的函数是无法被执行到的终点的情况
function loop(): never {
  while (true) { }
}


//变量的声明

//类型断言
let str = "1";
let str2: number = <number><any>str;
console.log(str2);
//类型推断
let num = 2;//类型推断为number
console.log("num变量的值为" + num);
// num = "12";//编译错误
console.log(num)

// 变量作用域
var global_num = 12;//全局变量
class Numbers {
  num_val = 13;//实例变量
  static sval = 10;//静态变量
  storeNum(): void {
    var local_num = 14;//局部变量
  }
};
console.log("全局变量:" + global_num);
console.log(Numbers.sval);//静态变量
var obj = new Numbers();
console.log("实例变量:" + obj.num_val);

//算术运算符
let num1: number = 10;
let num2: number = 2;
let res: number = 0;
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
num1++
console.log("num1 自增运算:" + num1);
num2--;
console.log("num2 自减运算:" + num2);

//关系运算符
let numb1: number = 5;
let numb2: number = 9;
console.log("numb1的值为:" + numb1)
console.log("numb2的值为:" + numb2)
let res1 = numb1 > numb2;
console.log("numb1 大于 numb2" + res1);
res1 = numb2 < numb2;
console.log("numb1 小于 numb2" + res1)











