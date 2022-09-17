function* foo(num) {
  console.log("函数开始执行")

  const value1 = 100 * num;
  console.log("第一段代码：", value1);
  // yield后面的值会返回出去，yield本身的返回值即为next传递的值
  const n = yield value1;//返回值就是next方法传递的参数
  console.log(n);
  const value2 = 200 * n;
  console.log("第二段代码：", value2)
  const count = yield value2;
  console.log(count)
  const value3 = 300 * count;
  console.log("第三段代码：", value3)
  yield value3;
  console.log("函数执行结束~")
  return "kang"
}

//生成器的next方法可以传递参数
const generator = foo(5)
console.log(generator.next());
//第二段代码，第二次调用next的时候执行的
console.log(generator.next(10))
console.log(generator.next(25))

