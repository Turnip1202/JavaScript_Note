function add(x, y, z) {
  return x + y + z;
}

var result = add(10, 20, 30);
console.log(result);


function sum1(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    }
  }
}
var result1 = sum1(10)(20)(30)
console.log(result1)

// įŽåį
var sum3 = x => y => z => x + y + z;
console.log(sum3(10)(20)(30))