let obj = {
  name: "turnip"
}

console.log(obj.__proto__);

//对象里面有一个__proto__对象:隐式原型对象
// Foo是一个函数,那么它会有一个显示原型对象:Foo.prototype
// Foo.prototype来自哪里?
// 答案:创建一个函数,Foo.prototype = {constructor:Foo}

// Foo是一个对象，那么它会有一个隐式原型对象：Foo.__proro__
// Foo.__proto__来自哪里？
// 答案：当new Function()    Foo.__proto__ = Function.prototype
// Function.prototype = {constructor:Function}

// let Foo = new Function
// 上面这句和下面等价
function Foo() { }

console.log(Foo.prototype === Foo.__proto__);//false
console.log(Foo.prototype.constructor);//Foo
console.log(Foo.__proto__.constructor);//Function


let foo1 = new Foo();
let obj1 = new Object();
console.log(Object.getOwnPropertyDescriptors(Function.__proto__))