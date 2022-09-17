// ES12 : FinalizarionRegistry类
const finalRegistry = new FinalizationRegistry((val) => {
  console.log("注册在fianlRegistry的对象，某一个被销毁", val);
})

let obj = { name: "turnip" }
let info = { age: 18 }
finalRegistry.register(obj, "obj");
finalRegistry.register(info, "info");
obj = null;
info = null;