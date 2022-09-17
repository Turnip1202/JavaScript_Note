// 总结：call、apply，及bind在执行函数时，可以明确绑定this，故称这种绑定为显示绑定


function foo() {
  console.log("函数被调用了", this);
}

// 1,foo直接调用和call/apply调用的不同在于this的绑定的不同
//foo直接调用指向的是全局对象
// foo()

var obj = {
  name: "obj"
};
// call/apply是可以指定this的绑定对象的
foo.call(obj);
foo.apply(obj);
foo.apply("aaa")

// 2.call和apply的区别在于第二个参数
function sum(num1, num2, num3) {
  console.log(num1, num2, num3, this);
};
sum.call("call", 20, 30, 40);
sum.apply("apply", [20, 30, 40]);





var newFoo = foo.bind("aaa");
newFoo();
var bar = foo;
console.log(bar === foo)
console.log(newFoo === foo)