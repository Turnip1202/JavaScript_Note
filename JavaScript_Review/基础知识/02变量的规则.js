//1.没有声明的变量直接使用，会报错
// console.log(foo);//foo is not defined


//2.变量直接赋值，会隐式创建全局变量
//相当于，js解释器会解释你写的代码给js核心
// w = 10;
// console.log(w);//10
// //即js解释器会这样理解
// var w;
// w = 10;
// console.log(w);//10



//3.变量的默认值undefined
// var a;//or let a;
// console.log(a);//undefined


// 4.批量声明变量
// var a, b, c;

// 5.批量赋值
//这里，a是显式声明，b和c是隐式声明
// var a = b = c = 2;





