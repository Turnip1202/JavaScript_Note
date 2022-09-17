{
  function* fn1() {
    yield "test1"
  }
  function* fn2() {
    yield "test2";
    //手动遍历嵌套的Generator函数
    for (let key of fn1()) console.log(key)
    yield "test3"
  }
  let f = fn2();
  for (let key of f) console.log(key)
}


{//ES6新写法
  function* fn1() {
    yield "test1"
  }
  function* fn2() {
    yield "test2";
    yield* fn1()
    yield "test3"
  }
  let f = fn2();
  for (let key of f) console.log(key)
}