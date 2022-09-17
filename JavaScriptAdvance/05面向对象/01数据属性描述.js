// 数据属性描述符
// 数据属性描述符和存取属性描述符的区别：
//数据属性描述符定义只可以存取数据、读取数据的对象
//存取属性描述符定义一个属性，该属性的调用可以存取和读取当前对象其他属性的数据




var obj = { name: "turnip" }
Object.defineProperty(obj, "turnip", {
  //属性值
  value: "kang",//默认undefined
  //是否可配置,删除or写入
  configurable: false,//默认值:false
  //是否可枚举,即可见,可遍历     注意：可以访问，只是不可见
  enumerable: true,//默认值:false
  //是否可写
  writable: false//默认值false
})
