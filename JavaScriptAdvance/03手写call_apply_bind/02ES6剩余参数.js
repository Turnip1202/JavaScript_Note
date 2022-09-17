function sum(...arr) {
  console.log(arr);
};


sum(1, 2, 3, 4)
sum(1, 2, 3)
sum(1, 2)
sum(1)

var names = [4, 3, 2, 1];
var newName = [...names]
console.log(newName);
function foo(a, b, c, d) {
  console.log(a, b, c, d)

}
foo(...names)