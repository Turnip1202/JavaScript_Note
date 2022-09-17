//利用工厂函数的方式，创建对象

let personObj = {
  running: function () {
    console.log("running");
  }
}

function createStudent(name) {
  let stu = Object.create(personObj);
  stu.name = name;
  stu.studying = function () {
    console.log("studying")
  }
  return stu;
}

let stuObj = createStudent("turnip")
let stuObj1 = createStudent("kang")

console.log(stuObj, stuObj1)