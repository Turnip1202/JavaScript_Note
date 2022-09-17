//Generator的this是无效的
function* testGenerator() {
  this.name = "turnip";
  yield "hello";
  yield "world"
}
// const t = testGenerator();
// console.log(t.next())
// console.log(t.name)

let t = testGenerator.call(testGenerator.prototype)
console.log(t.next())
console.log(t.name)