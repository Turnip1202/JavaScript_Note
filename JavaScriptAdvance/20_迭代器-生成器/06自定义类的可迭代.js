//创建一个教室类，创建出来的对象均为可迭代对象
class ClassRoom {
  constructor(address, name, students) {
    this.address = address;
    this.name = name;
    this.students = students;
  }

  entry(newStudent) {
    this.students.push(newStudent)
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.students.length) return { done: false, value: this.students[index++] }
        else return { done: true, value: undefined }
      },
      return: () => {//迭代器提前终止，会调用这个方法
        console.log("迭代器提前终止了")
        return { done: true, value: undefined }
      }
    }
  }
}


const ClassRoom1 = new ClassRoom("3幢5楼205", "计算机教室", ["turnip", "kang", "kkk"]);

ClassRoom1.entry("李华");

for (const stu of ClassRoom1) {
  console.log(stu);
  if (stu === "kang") break
}

//委托模式，直接在原型上添加
function Person() { }
Person.prototype[Symbol.iterator] = function () { }