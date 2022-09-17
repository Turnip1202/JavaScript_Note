//浅克隆
//遍历对象，复制其属性
function shallowClone(origin) {
  var result = {};
  for (var key in origin) {
    if (origin.hasOwnProperty(key)) {
      result[key] = origin[key]
    }
  }
  return result;
}
var origin = { a: 1, b: [1, 2, 3], c: { d: "kang" } }
var result = shallowClone(origin)
console.log(result);

//ES6的Object.assign
var origin = {
  a: 1,
  b: [2, 3, 4],
  c: { d: "kang" }
}
var result = Object.assign(origin)
console.log(result);
console.log(origin)


//对象深克隆

// 1,JSON序列化和反序列化
var origin = { a: 1, b: [1, 2, 3], c: { d: "turnip" } }
var result = JSON.parse(JSON.stringify(origin))
console.log(origin);
console.log(result);
//存在几个问题
// 1>Function类型的属性将会丢失
// 2>正则表达式的属性将会变为一个空对象
// 3>属性值中对象的constructor属性将会被抛弃
function Animal(name) { this.name = name }
var animal = new Animal("turnip")
var origin = { a: function () { return "a" }, b: new RegExp("\d", "g"), c: animal };
var result = JSON.parse(JSON.stringify(origin))
console.log(origin)
console.log(result);//{ b: {}, c: { name: 'turnip' } }
console.log(origin.c.constructor);//[Function: Animal]
console.log(result.c.constructor);//[Function: Object]

//循环引用会抛出异常


// 2，自定义深克隆
; (function (_) {
  var types = "Array Object String Date RegExp Function Boolean Number Null Undefined".split(' ')
  function type() {
    let result = Object.prototype.toString.call(this).slice(8, -1);//为了留下类型[object Array]
    return result
  };

  for (var i = types.length; i--;) _["is" + types[i]] = (function (self) {
    return function (elem) { return type.call(elem) === self }
  })(types[i]);
  return _;
})(_ = {});
console.log(_.isArray([]))
// 深克隆函数
function deepClone(source) {
  //维护两个存储循环引用的数组
  var parents = [];
  var children = [];
  //用于获取正则表达式的修饰符
  function getRegExp(reg) {
    var result = "";
    if (reg.ignoreCase) result += "i";
    if (reg.global) result += "g";
    if (reg.multiline) result += "m";
    return result;
  }
  //便于递归的_clone函数
  function _clone(parent) {
    if (parent === null) return null;
    if (typeof parent !== "object") return parent;
    var child = null, proto = null;
    if (_.isArray(parent)) child = [];
    else if (_.isRegExp(parent)) {
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    }
    else if (_.isDate(parent)) child = new Date(parent.getTime());
    else {
      proto = Object.getPrototypeOf(parent);
      child = Object.create(proto);
    }
    //处理循环引用
    var index = parents.indexOf(parent)
    if (index !== -1) return children[index]
    parents.push(parent);
    children.push(child)
    // 遍历对象属性
    for (var prop in parent) {
      if (parent.hasOwnProperty(prop)) {
        //递归处理
        child[prop] = _clone(parent[prop])
      }
    }
    return child
  }
  return _clone(source)
}

var origin = { a: 1, b: [1, 2, 3], c: { d: "kang" } };
var result = deepClone(origin)
console.log(origin)
console.log(result)
//测试函数、正则
function Animal(name) {
  this.name = name;
}
var animal = new Animal("kang")
var origin = {
  a: function () { return "a" },
  b: new RegExp("\d", "g"),
  c: animal
}
var result = deepClone(origin)
console.log(result);
//测试循环引用
var origin = { a: "kang" }
origin.b = origin;
var result = deepClone(origin)
console.log(origin)
console.log(result)