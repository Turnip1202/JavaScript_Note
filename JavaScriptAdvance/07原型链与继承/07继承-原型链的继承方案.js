

//父类：公共属性和方法
function Person() {
  this.name = "turnip";
  this.friends = []
}

Person.prototype.eating = function () {
  console.log(this.name + " eating")
}

//子类：特有的属性和方法
function Student() {
  this.son = 111;
}

// 将父类的方法继承到一个对象上，然后将子类的原型继承到此对象上
let p = new Person();
Student.prototype = p;

Student.prototype.studying = function () {
  console.log(this.name + " studying~");
}

let stu = new Student()
console.log(stu.name)
stu.eating();
stu.studying();

// 原型链实现继承的弊端
// 1.第一个弊端:打印stu对象时,继承的属性看不到,且分类错误
console.log(stu);//Person { son: 111 }

// 2.第二个弊端:创建出两个stu对象时,会有些bug

let stu1 = new Student();
let stu2 = new Student();
//直接改变对象的属性,js引擎会理解为给对象添加属性
stu1.name = "kang";//这里相当于添加属性并赋值
console.log(stu1.name);//kang
console.log(stu2.name);//turnip

//获取引用,则会相互影响
stu1.friends.push('kang');//这里相当于时查找到friends属性,然后再修改数据
console.log(stu1.friends);//[ 'kang' ]
console.log(stu2.friends);//[ 'kang' ]

// 3,第三个弊端：在实现类的过程中，没有传递参数

let stu3 = new Student("kk", 19)




