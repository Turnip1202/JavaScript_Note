//迭代器本身是一个对象，利用迭代器可以访问另一个容器对象（数组等）

//编写一个迭代器
const iterator = {
  next() {
    return { done: true, value: "turnip" }
  }
}
console.log(iterator.next())
console.log(iterator.next())

//数组
const names = ["turnip", "kang", "kkk"]

// 创建一个迭代器对象来访问数组
let index = 0;
const namesIterator = {
  next() {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}


console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());