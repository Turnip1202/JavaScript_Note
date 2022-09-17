//优化log
Object.prototype.log = function () {
  let val = this.valueOf();
  console.log(val);
}
// // test方法
// const str = 'table football';

// const regex = new RegExp('foo*');
// const globalRegex = new RegExp('foo*', 'g');

// console.log(regex.test(str));
// // expected output: true

// console.log(globalRegex.lastIndex);
// // expected output: 0

// console.log(globalRegex.test(str));
// // expected output: true

// console.log(globalRegex.lastIndex);
// // expected output: 9

// console.log(globalRegex.test(str));
// // expected output: false



// // match
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// // expected output: Array ["T", "I"]





// // exec
// const regex1 = RegExp('foo*', 'g');
// const str1 = 'table football, foosball';
// var array1;

// while ((array1 = regex1.exec(str1)) !== null) {
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
//   // expected output: "Found foo. Next starts at 9."
//   // expected output: "Found foo. Next starts at 19."
// }



// search
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."
