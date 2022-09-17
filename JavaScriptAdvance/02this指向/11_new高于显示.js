function foo() {
  console.log(this);
}
var bar = foo.bind("turnip");
var obj = new bar();
