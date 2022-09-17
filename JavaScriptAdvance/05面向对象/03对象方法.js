var obj = { name: "turnip", age: 18 }


console.log(Object.getOwnPropertyDescriptors(obj))
console.log(Object.getOwnPropertyDescriptor(obj, "name"))
Object.preventExtensions(obj);//阻止扩展，即不能添加属性
Object.seal(obj);//所有属性不可配置
Object.freeze(obj);//冻结属性