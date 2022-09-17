//总结：箭头函数只查找上层作用域里的this
// 1，测试箭头函数中this指向
var name = "turnip";
var foo = () => {
  console.log(this);
}
// Node: { }
// Browser:window

foo();
var obj = {
  foo: foo
}
obj.foo();
foo.call("abc");


var obj = {
  data: [],
  getData: function () {
    //发送网络请求；将结果放在data属性中
    //箭头函数之前
    var _this = this
    setTimeout(function () {
      var result = ["abc", "cba", "nba"];
      _this.data = result;
    }, 2000)

    // 箭头函数之后
    setTimeout(() => {
      var result = ["abc", "cba", "nba"];
      this.data = result;
    }, 2000)
  }
}

obj.getData();