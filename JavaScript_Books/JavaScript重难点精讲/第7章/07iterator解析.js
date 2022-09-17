//邂逅iterator
{
  function makeItertor(array) {
    let index = 0;
    return {
      next: function () {
        if (index < array.length) {
          return {
            value: array[index++],
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
  const arr = ["one", "two"]
  for (let item of arr) console.log(item)
  const iter = makeItertor(arr)
  console.log(iter.next())
  console.log(iter.next())
  console.log(iter.next())

}

//给对象添加iterator解构
{
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  //在原型上添加[Symbol.iterator]属性
  Person.prototype[Symbol.iterator] = function () {
    //设置变量，记录遍历的次数
    let count = 0;
    //通过Object.keys函数或租实例自身的所有属性
    let propArr = Object.keys(this)
    return {
      next: function () {
        //没执行一次遍历，count的值加1
        //当count的值小于属性的长度时，表示仍然可以遍历，设置done为false
        if (count < propArr.length) {
          let index = count++;
          return {
            value: propArr[index],
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
  const person = new Person("turnip", 12)
  for (let item of person) {
    console.log(item)
  }
}
