function fn() {
  console.log(a)
  var a = 1;
}
fn()

show();//turnip
var show;
function show() {
  console.log("turnip")
}
show = function () {
  console.log("kang")
}
show();//kang


//变量提升和函数提升
var a = true;
foo();
function foo() {
  if (a) var a = 12;
  console.log(a);//undefined
}

// 变量提升和函数提升的优先级(先提升变量)
function fn() {
  console.log(typeof foo);
  var foo = "variable";
  function foo() { return "function" }
  console.log(typeof foo)
}
fn();

let cachedBox = (function () {
  let cache = {}
  return {
    searchBox: function (id) {
      if (id in cache) {
        return "查找的结果:" + cache[id];
      }
      //经过一段耗时的dealFn函数处理
      let result = dealFn(id);
      cache[id] = result;
      //返回就算结果
      return "查找的结果为：" + result;
    }
  }
})();
function dealFn(id) {


  console.log("这段操作很耗时")

  return id;
}
console.log(cachedBox.searchBox(1));
console.log(cachedBox.searchBox(1));

let stack = (function () {
  let arr = [];
  return {
    push(value) {
      arr.push(value)
    },
    pop() {
      return arr.pop()
    },
    size: function () {
      return arr.length;
    }
  }
})();

stack.push("turnip")
stack.push("kang")
console.log(stack.size())
stack.pop();
console.log(stack.size());


var name = "outer"
var obj = {
  name: "inner",
  method() {
    return function () {
      return this.name;
    }
  }
}
console.log(obj.method()());

var name = "outer"
var obj = {
  name: "inner",
  method() {
    var _this = this;
    return function () {
      return _this.name;
    }
  }
}
console.log(obj.method()());

