function createObject(o) {//返回一个对象，此对象的原型绑定在传入的对象上
  function Fn() { }
  Fn.prototype = o;
  return new Fn;
}

// 传入两个对象这两个对象实现继承
function inheritPrototype(SubType, SuperType) {
  SubType.prototype = createObject(SuperType.prototype);
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person() { };
function Student() { }


inheritPrototype(Student, Person);

console.log(Person.prototype.__proto__);

let stu = new Student();
// instanceof后面需要是构造函数名，即前者的原型链上是否有后者的原型
console.log(stu instanceof Student);//true 
console.log(stu instanceof Person);//true
console.log(stu instanceof Object);//true
