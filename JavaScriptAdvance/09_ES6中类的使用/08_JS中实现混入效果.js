class Person { }


function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log("running~")
    }
  }
  return NewClass
}


function mixinEater(BaseClass) {//直接返回型
  return class extends BaseClass {
    eating() {
      console.log("eating~")
    }
  }
}

//在JS中类只能有一个父类：单继承
class Student extends Person { }

//混入两个类
// 原理：相当于工厂模式，通过对应的混入函数，在函数内部将所传入的类继承到对应类的函数
let NewStudent = mixinEater(mixinRunner(Student));


let ns = new NewStudent()
ns.running()
ns.eating()


