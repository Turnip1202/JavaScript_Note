//Object.is(v1,v2)
console.log(Object.is(NaN, NaN));//turn
console.log(Object.is(-0, +0));//false
var obj = {prop:2}
Object.freeze(obj);//冻结，即不可操作
obj.prop = 3
console.log(obj.prop)

// Object.assign(target, source);
var target = { a: 1, b: 2 };
var source = {c:3,b:4}
var newObj = Object.assign(target, source);//合并对象；将后者合并到原对象中，属性冲突，会被覆盖
console.log(newObj)

//Object.keys()
let arr = Object.keys(newObj); 
console.log(arr);
console.log(Object.keys(arr));//数组也可以用


