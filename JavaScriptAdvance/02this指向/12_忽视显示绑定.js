//总结：在显式绑定中，传入null和undefined时，将忽视显式绑定，执行默认绑定
function foo() {
  console.log(this);
}

foo.apply("turnip");
foo.apply({});

//apply、call、bind，当传入null/undefined时，自动将this绑定成全局对象
foo.apply(null);
foo.apply(undefined);

var bar = foo.bind(null);
bar();