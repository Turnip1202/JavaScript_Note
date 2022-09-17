

//父类：公共属性和方法
function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.eating = function () {
  console.log(this.name + " eating")
}

//子类：特有的属性和方法
function Student(name, age, friends, son) {
  //相当于是借用了Person构造函数的执行逻辑
  Person.call(this, name, age, friends)
  this.son = son;
}

//直接将子类的原型指向父类
Student.prototype = Person.prototype;
//但是这样会使得子类添加原型方法时，会直接添加到父类上
Student.prototype.studying = function () {
  console.log(this.name + " studying~");
}

let stu = new Student("lihua", 18, ['k'], 111)
console.log(stu.name)
stu.eating();
stu.studying();

// 原型链实现继承的弊端
// 1.第一个弊端:打印stu对象时,继承的属性看不到,且分类错误
console.log(stu);//Person { name: 'lihua', age: 18, friends: [ 'k' ], son: 111 }

// 2.第二个弊端:创建出两个stu对象时,会有些bug

let stu1 = new Student("liming", 19, ["a"], 112);
let stu2 = new Student("xiaoming", 20, ["n"], 113);
//直接改变对象的属性,js引擎会理解为给对象添加属性
stu1.name = "kang";//这里相当于添加属性并赋值
console.log(stu1.name);//kang
console.log(stu2.name);//xiaoming

//获取引用,则会相互影响
stu1.friends.push('kang');//这里相当于时查找到friends属性,然后再修改数据
console.log(stu1.friends);//[ 'a', 'kang' ]
console.log(stu2.friends);//[ 'n' ]

// 3,第三个弊端：在实现类的过程中，没有传递参数

let stu3 = new Student("kk", 19, ["g"], 114)




