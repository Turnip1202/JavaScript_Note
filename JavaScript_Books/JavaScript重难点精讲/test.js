let arr = ['1', '2', '3', '4', '5'];
let result = arr.map(parseInt);
console.log(result)

//等效代码
let result1 = arr.map((val, index) => parseInt(val, index))
console.log(result1)


//所期望的代码
let result2 = arr.map(val => parseInt(val, 10))
console.log(result2)

if (!Number.isNaN) {
  Number.isNaN = function (n) { return n !== n; }
}


let s1 = "2 + 2"
let s2 = new String("2 + 2")
console.log(eval(s1))
console.log(eval(s2))


//算法5：
// 利用栈的特性（先进后出），分别入栈，然后再出栈拼接
//手写简单的栈结构
function Stack() {
  this.data = [];
  this.top = 0;
}
//改变栈的原型对象，使其使用自定义栈方法
Stack.prototype = {
  //入栈：现在栈顶添加元素，然后元素个数加1
  push(element) {
    this.data[this.top++] = element
  },
  pop: function () {
    return this.data[--this.top];
  },
  length: function () {
    return this.top
  }
}
//使用自定义栈
function reverseString5(str) {
  //创建栈实例
  let strStack = new Stack();
  // 将字符串转化为数组
  let arr = str.split('');
  let length = arr.length;
  let result = '';
  //将元素压入进栈
  for (let i = 0; i < length; i++) {
    strStack.push(arr[i])
  }
  //出栈并拼接字符串
  for (let j = 0; j < length; j++) {
    result += strStack.pop(j)
  }
  return result;
}
let result5 = reverseString5("trunip");
console.log(result5)




let number = 123;
let r1 = typeof (number + " hello")
let r2 = typeof number + " hello";
console.log(r1, r2)

let y = (x = 8 * 2, x * 4);
console.log(y)

//交换变量
let a = "a";
let b = "b";
a = [b, b = a][0];
console.log(a, b)
a = [b][b = a, 0]
console.log(a, b)



function Cat() {
  console.log(this);//Cat {}
  //new操作符做的事情
  let cat = {}
  cat.__proto__ = Cat.prototype;
  Cat.call(cat)
}
let cat = new Cat()

function getObj(obj) {
  switch (obj) {
    case firstObj:
      console.log("这是第一个对象");
      break;
    case secondObj:
      console.log("这是第二个对象");
      break;
    default:
      console.log("这是独一无二的对象")
  }
}
function Person() { }
let uniqueObj = new Person
let firstObj = new Person
let secondObj = new Person
getObj(firstObj)
getObj(secondObj)
getObj(uniqueObj)

let a1 = [1, 2, 3]
let a2 = { name: "turnip" };
console.log(Object.prototype.toString.call(a1));//[object Array]
console.log(Object.prototype.toString.call(a2));//[object Object]


var y1 = "global"
function constructFunction() {
  var y1 = "local"
  return new Function("return y1")
}
console.log(constructFunction()())

let url = 'http://turnip?param'
let baseElement = document.querySelector("p")

for (let i = 0; i < 2; i++) {
  let i = 1
  console.log(i);
}

let [arg1 = 2,] = [undefined, 2]
console.log(arg1)