function foo() {

}


const fooProxy = new Proxy(foo, {
  apply: function (target, thisArg, argArray) {
    console.log(`对foo函数进行apply调用`);
    return target.apply(thisArg, argArray);
  },
  construct: function (target, argArray, newTarget) {
    console.log(`对foo函数进行new调用`);
    return new target(...argArray)
  }
});

fooProxy.apply({}, ["turnip", "kang"]);

new fooProxy("kang", "turnip")