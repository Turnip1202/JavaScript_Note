function* helloWorldGenerator() {
  console.log("Generator")
  yield "hello"
  yield "world"
}
const hw = helloWorldGenerator()
console.log("测试先后运行顺序")
console.log(hw.next())

//yield的返回值
function* foo(x) {
  let y = 3 * (yield (x + 2))
  let z = yield (y / 4)
  return (x + y + z);
}
let a = foo(5);
console.log(a.next());//{ value: 7, done: false }
console.log(a.next());//{ value: NaN, done: false }
console.log(a.next());//{ value: NaN, done: true }
let b = foo(5);//第一个 next 方法用来启动遍历器对象，所以不用带有参数。
console.log(b.next(1));//{ value: 7, done: false }
console.log(b.next(8));//{ value: 6, done: false }
console.log(b.next(9));//{ value: 38, done: true }