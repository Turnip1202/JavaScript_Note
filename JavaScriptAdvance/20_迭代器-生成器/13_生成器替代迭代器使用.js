// 1,生成器来替代迭代器
function* createArrayIterator(arr) {

  // 3,第三种写法
  // yield相当于会改造arr的值
  yield* arr;//会返回一个生成器

  // // 2.第二种(第一种的变种)
  // for (const item of arr) {
  //   yield item
  // }


  // // 1,第一种；写法（利用yield返回）
  // yield "turnip";
  // yield "kang";
  // yield "kkk";
}
const names = ["turnip", "kkk", "kang"];
const namesIterator = createArrayIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next());

// function createRangeIterator(start, end) {
//   let index = start;
//   return {
//     next: function () {
//       if (index < end) { return { done: false, value: index++ } }
//       else {
//         return { done: true, value: undefined }
//       }
//     }
//   }
// }

// const rangeIterator = createRangeIterator(10, 20)
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())

function* createRangeIterator(start, end) {
  let index = start;
  while (index < end) yield index++;
}
const rangeIterator = createRangeIterator(10, 20)
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())



// 3.class案例
class ClassRoom {
  constructor(address = "郑州市", name = "turnip", students = "kang") {
    this.address = address;
    this.name = name;
    this.students = students;
  }
  entry(newStudent) {
    this.students.push(newStudent)
  }
  foo = () => { }
  *[Symbol.iterator]() {
    yield* this.students
  }
}

const Classroom = new ClassRoom("3幢", "1102", ["turnip", "kang"]);
for (const item of Classroom) console.log(item)

