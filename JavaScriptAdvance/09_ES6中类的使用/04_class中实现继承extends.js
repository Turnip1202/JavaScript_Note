class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
  running() {
    console.log(this.name + " running~")
  }
  eating() {
    console.log(this.name + " eating~")
  }

  personMethod() {
    console.log("处理逻辑1")
    console.log("处理逻辑2")
    console.log("处理逻辑3")
  }

  static staticMethod() {
    console.log("PersonStaticMethod")
  }
}


class Student extends Person {
  // JS引擎要求使用继承后，子类的构造方法需要在使用this之前
  constructor(name, age, son) {
    super(name, age);
    this.son = son
  }
  //编写自己的方法
  studying() {
    console.log(this.name + " studying~")
  }

  //重写父类的方法
  running() {
    console.log("student" + this.name + " running")
  }

  //重写personMethod方法
  personMethod() {
    super.personMethod()
    console.log("处理逻辑4")
    console.log("处理逻辑5")
    console.log("处理逻辑6")
  }

  //重写静态方法
  static staticMethod() {
    super.staticMethod();
    console.log("StudentStaticMethod")
  }


}


let stu = new Student("turnip", 18, 111)
console.log(stu);

// console.log(Object.getOwnPropertyDescriptors(stu.__proto__));//指向Student
// console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__));//指向Person


stu.eating();
stu.running();
stu.personMethod();
Student.staticMethod();
console.log(Object.getOwnPropertyDescriptors(Person))
