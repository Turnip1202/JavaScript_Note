//历史回滚
class VersionedArray {
  constructor() {
    this.arr = []
    this.history = [[]]
  }
  commit() {
    this.history.push(this.arr.slice())
  }
  revert() {
    this.arr.splice(0, this.arr.length, ...this.history[this.history.length - 1])
  }
}

let x = new VersionedArray();
x.arr.push(1)
x.arr.push(2)
console.log(x.arr)
console.log(x.history)
x.commit()
console.log(x.history)
x.arr.push(3)
console.log(x.arr)
x.commit()
console.log(x.history)
x.arr.push(4)
console.log(x.arr)
x.revert()
console.log(x.arr)


{//class的this的指向变化
  class Person {
    constructor(name) {
      this.name = name
      this.getName = this.getName.bind(this)
    }
    getName() {
      return this.name;
    }
  }
  const p = new Person("turnip")
  let { getName } = p
  console.log(getName())
}