var obj = { name: "why" }

// console.log(obj.address)

// prototype是函数自己的原型对象，
//也就是说在查找函数的原型的时候，会查找两个地方，一个是隐式原型，另一个是显示原型


// 到底是找到哪一层对象之后停止继续查找了呢?
// 因为对象有原型，故只要原型指向一个对象，那么就会继续向上查找，
// 倘若对象指向null则会停止查找，Object的原型指向null


// 字面对象obj的原型是 [Object: null prototype] {}
// [Object: null prototype] {} 就是顶层的原型
// obj.__proto__ => [Object: null prototype] {}
console.log(obj.__proto__);//[Object: null prototype] {}
console.log(obj.__proto__.__proto__);//null
console.log(Object.__proto__);//{} 即Object的原型对象，实际上并不是空对象。有很多不可枚举的方法
console.log(Object.__proto__.__proto__);//[Object: null prototype] {}
console.log(Object.__proto__.__proto__.__proto__);//null
console.log(Object.__proto__.__proto__.__proto__.__proto__);

// Object的constructor指向Object构造函数本身