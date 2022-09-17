function foo() {
  console.log("foo~,函数体代码")
}

// foo就是一个普通的函数
//函数的三种调用方式
foo(); new foo; new foo();


// 通过new调用foo函数，那么这个函数就是一个构造函数
//这种方式调用，会返回一个实名兑现，对象名为函数名
let p1 = new foo;
console.log(p1);