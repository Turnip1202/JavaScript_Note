function foo(num1, num2, num3) {
  console.log(arguments);//类数组
  //常见arguments的操作
  // 1，获取参数长度
  console.log(arguments.length);
  // 2.根据索引值获取某个参数
  console.log(arguments[0])
  console.log(arguments[1])
  console.log(arguments[2])
  // 3.callee获取当前arguments所在的函数
  console.log(arguments.callee);


}

foo(1, 2, 3, 4, 5, 6);