function Queue() {
  //属性
  this.items = [];
  //方法
  //1，将元素加入到队列
  Queue.prototype.enqueue = function (element) {
    this.items.push(element);
  }
  //2.从队列中删除前端元素
  Queue.prototype.dequeue = function () {
    return this.items.shift();
  }
  //3.查看前端元素
  Queue.prototype.front = function () {
    return this.items[0];
  }
  //4，查看队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length == 0
  }
  //5，查看队列中元素的个数
  Queue.prototype.size = function () {
    return this.items.length;
  }
  Queue.prototype.toString = function () {
    var resultString = '';
    for (var i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' ';
    }
    return resultString;
  }
}
// var queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// console.log(queue)
// queue.dequeue();
// console.log(queue)
// console.log(queue.front())
// console.log(queue.isEmpty())
// console.log(queue.size())
// console.log(queue.toString())

//击鼓传花
function winner(namelist, num) {
  var queue = new Queue();
  for (var i = 0; i < namelist.length; i++) {
    queue.enqueue(namelist[i])
  }
  while (queue.size() > 1) {
    for (var i = 0; i < num - 1; i++) {//num如果不减1，删除的是天选之人后面的人
      queue.enqueue(queue.dequeue());
    }
    //循环结束后，即此时前端元素即为天选之人。故执行删除
    queue.dequeue();
  }
  var endName = queue.front();
  console.log(endName)
  return namelist.indexOf(endName);
}
console.log(winner(['t', 'u', 'r', 'n', 'i', 'p'], 3))

