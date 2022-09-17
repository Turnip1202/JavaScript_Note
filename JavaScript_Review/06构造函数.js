function Student(name, age, sex) { 
  // var obj = {}; //虚拟对象
  // this = obj;
  this.nam = name;
  this.age = age;
  this.sex = sex;
  this.speak = function () { 
    console.log('我要学习，我叫：'+this.name)
  }
  // return this;//隐藏返回
};
var stu = new Student('Trunip',18,1)
stu.speak();
console.log(stu instanceof Student)