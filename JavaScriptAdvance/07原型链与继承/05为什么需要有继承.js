//继承可以轻易的将两个类的方法建立联系，重复利用一些逻辑

// 例如下面，有许多是重复的操作，完全可以通过继承减少操作

//Student
function Student(name, age, sno) {
  this.name = name;
  this.age = age;
  this.son = son;
}

Student.prototype.running = function () {
  console.log(this.name + "running~");
}
Student.prototype.eating = function () {
  console.log(this.name + "eating~");
}
Student.prototype.studying = function () {
  console.log(this.name + "studying~");
}

//Teacher
function Teachers(name, age, title) {
  this.name = name;
  this.age = age;
  this.title = title;
}
Teachers.prototype.running = function () {
  console.log(this.name + "running~")
}
Teachers.prototype.eating = function () {
  console.log(this.name + "eating");
}
Teachers.prototype.teaching = function () {
  console.log(this.name + "teaching~")
}



