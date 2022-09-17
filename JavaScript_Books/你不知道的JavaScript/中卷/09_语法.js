// //提取所有的元音字母
// function vowels(str) {
//   var matches;
//   if (str) {
//     matches = str.match(/[aeiou]/g);
//     if (matches) {
//       return matches;
//     }
//   }
// }
// vowels("hello world")

// // 合并语句
// function vowels1(str) {
//   let matches;
//   if (str && (matches = str.match(/[aeiou]/g))) return matches;
// }
// vowels1("hello world");



// foo: for (var i = 0; i < 4; i++) {
//   for (var j = 0; j < 4; j++) {
//     if (j == i) {
//       continue foo;
//     }
//     if ((j * i) % 2 == 1) {
//       continue;
//     }
//     console.log(i, j)

//   }
// }

// foo: for (var i = 0; i < 4; i++) {
//   for (var j = 0; j < 4; j++) {
//     if ((i * j) > 3) {
//       console.log("stopping", i, j);
//       break foo;
//     }
//     console.log(i, j);
//   }
// }


// function foo({ a, b, c }) {
//   console.log(a, b, c);
// };

// foo({ c: [1, 2, 3], a: 42, b: "foo" })


// var a = 42;
// var b = "foo";
// var c = false;
// // var d = a && b || caches ? c || b ? a : c && b : a;
// //方法:将优先级高的括起来，然后由关联顺序对同级运算法，加括号
// var d = ((a && b) || caches) ? ((c || b) ? a : (c && b)) : a;



// try...finally
// function foo() {
//   try { return 42; }
//   finally {
//     console.log("Hello");
//   }
//   console.log("never runs");
// }

// console.log(foo());//Hello  42
function foo() {
  try { return 42; }
  finally {
    throw "turnip"
  }
  console.log("never runs");
}

console.log(foo())


