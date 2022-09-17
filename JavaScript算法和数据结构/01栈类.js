function Stack() {
  this.items = [];
  //压栈
  Stack.prototype.push = function (element) {
    this.items.push(element);
  };
  //出栈
  Stack.prototype.pop = function () {
    return this.items.pop();
  };
  //查看顶级元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };
  //判断是否为空栈
  Stack.prototype.isEmpty = function () {
    return this.items.length == 0;
  };
  //获取栈内元素个数
  Stack.prototype.size = function () {
    return this.items.length;
  };
  Stack.prototype.toString = function () {
    var resultString = '';
    for (var i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' ';
    }
    return resultString;
  }

}
// //测试
// var s = new Stack();
// s.push(20)
// s.push(100)
// s.push(10)
// s.pop();
// console.log(s.peek())
// console.log(s.isEmpty())
// console.log(s.size())
// console.log(s.toString());


//十进制转二进制

function desToBin(decNuber) {
  var stack = new Stack();//定义栈对象
  while (decNuber > 0) {//循环操作
    stack.push(decNuber % 2);//获取余数，压栈
    decNuber = Math.floor(decNuber / 2);//向小取整循环
  }
  var binaryString = '';
  while (!stack.isEmpty()) {
    //只要栈内有值，弹出栈
    binaryString += stack.pop();
  }
  return binaryString;
}
console.log(desToBin(100));