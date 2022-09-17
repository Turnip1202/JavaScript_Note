// ES12:WeakRef类
// WeakRef.prototype.deref
//>如果对象没有销毁，则可以获取该对象
//>如果对象已经销毁，则获取的是undefined
const finalRegistry = new FinalizationRegistry((val) => {
  console.log("注册在finalRegistry的对象，某一个被销毁了", val)
})

let obj = { name: "turnip" }
let info = new WeakRef(obj);
finalRegistry.register(obj, "obj");

obj = null;

setTimeout(() => {
  console.log(info.deref()?.name);
  console.log(info.deref() && info.deref().name)
}, 10000)
