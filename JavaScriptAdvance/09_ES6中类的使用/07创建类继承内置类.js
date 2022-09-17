class Person { }
class Student extends Person { }

class TKArray extends Array {

  firstItem() {
    return this[0]
  }
  lastItem() {
    return this[this.length - 1]
  }
}

let arr = new TKArray(1, 2, 3);
arr.at(1)
console.log(arr.firstItem());
console.log(arr.lastItem());