//在浏览器里，this在全局作用域下指向window(globalObject)
//在Node环境中，this在全局作用域下指向:{}
console.log(this);
//在V8中，使用了call方法指向了一个空对象
//即Node环境中，一个js文件,就是一个模块

