function f1() { 
  var arr = [];
  for (var i = 0; i < 10; i++) { 
    arr.push(() => i)
    console.log(arr[i]());
  }
  return arr;
}
console.log(f1()[0]());