function Student(name, age) {
  this.name = name;
  this.age = age;
}
function Teacher() {

}

const stu = new Student("turnip", 19);
console.log(stu);
console.log(stu.__proto__ === Student.prototype);
console.log(Object.getPrototypeOf(stu) === Student.prototype)

//执行Student函数的内容,但是创建出来的对象时Teacher类型
const teacher = Reflect.construct(Student, ["kang", 18], Teacher);
console.log(teacher);
console.log(Reflect.getPrototypeOf(teacher) === Teacher.prototype)