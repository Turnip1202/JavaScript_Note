function PriorityQueue() {
  //内部重新创建一个类
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  //属性
  this.items = [];

  //方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    // 1.创建QueueElement对象
    var queueElement = new QueueElement(element, priority);
    if (this.items.length == 0) {
      this.items.push(queueElement)
    } else {
      var added = false;
      for (var i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true;
          break
        }

      }
      if (!added) {
        this.items.push(queueElement)
      }
    }


  }
  //2.从队列中删除前端元素
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  }
  //3.查看前端元素
  PriorityQueue.prototype.front = function () {
    return this.items[0];
  }
  //4，查看队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length == 0
  }
  //5，查看队列中元素的个数
  PriorityQueue.prototype.size = function () {
    return this.items.length;
  }
  PriorityQueue.prototype.toString = function () {
    var resultString = '';
    for (var i = 0; i < this.items.length; i++) {
      resultString += this.items[i].element + "-" + this.items[i].priority + " ";
    }
    return resultString;
  }


}
//测试代码

let pr = new PriorityQueue();
pr.enqueue('a', 20)
pr.enqueue('b', 10)
pr.enqueue('c', 300)
pr.enqueue('d', 100)
console.log(pr.toString())