//创建一个迭代器来访问数组
const iterableObj = {
  names: ["turnip", "kang", "kkk"],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.names.length) return { done: false, value: this.names[index++] }
        else return { done: true, value: undefined }
      }
    }
  }
}


// iterableObj对象就是一个可迭代对象
console.log(iterableObj[Symbol.iterator]);//这是一个函数

// 每次调用均会返回一个新的迭代器

//第一次调用IteratorObje[Symbol.iterator]函数
const iterator = iterableObj[Symbol.iterator]();//会返回一个迭代器
console.log(iterator)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//第二次调用IteratorObje[Symbol.iterator]函数
const iterator1 = iterableObj[Symbol.iterator]();
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())


// 可迭代对象可以用for..of遍历
for (let item of iterableObj) console.log(item)