var obj = {
  name: "obj",
  foo: function () {
    console.log(this)
  }
}

obj.foo();

// 1,call/apply 的显示绑定
obj.foo.apply("abc");
obj.foo.call("abc");

// 2,bind的显示绑定
var bar = obj.foo.bind("turnip");
bar();


// 3,更明显的比较
function foo() {
  console.log(this);
};

var obj = {
  name: "obj",
  foo: foo.bind("kang")
}
obj.foo();
