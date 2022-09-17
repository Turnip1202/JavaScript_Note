const obj = {
  name: "turnip",
  age: 18
}

console.log(Object.entries(obj));//[ [ 'name', 'turnip' ], [ 'age', 18 ] ]
const objEntries = Object.entries(obj);
objEntries.forEach(item => console.log(item[0], item[1]));
console.log(Object.entries(["abc", "cba", "cab"]))
console.log(Object.entries("abc"))