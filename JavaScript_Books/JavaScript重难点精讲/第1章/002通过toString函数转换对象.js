let obj = {
  age: "21",
  valueOf() { return [] },
  toString() { return this.age }
}
console.log(Number(obj))