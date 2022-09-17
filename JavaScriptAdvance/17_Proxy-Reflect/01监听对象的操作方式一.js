//使用Object.defineProperty设置存取属性描述符，实现对对象的监听
//注意Object.defineProperty设计的本意不是为了监听对象


const obj = {
  name: "turnip",
  age: 19
}

//原本obj.name是数据属性描述
//通过下面的方式，使得obj.name变成了存取属性描述
//然后利用存取属性描述的特性，实现对象书属性的监听
//但是这样有个弊端,在取数据的时候很不方便
// let value = obj.name
// Object.defineProperty(obj, "name", {
//   // values: "aaa",//无效
//   get() {
//     console.log("监听到对象name的属性被访问了")
//     console.log(this)
//     return this.values ?? value;
//   },
//   set(val) {
//     this.values = val;
//     console.log("监听到obj对象的name属性被设置值")
//   }
// });



//1,使用Object.keys方法遍历对象的所有键，
//2,再用forEach方法遍历所有的键，分别给各键进行监听，以实现对象全属性监听
Object.keys(obj).forEach(key => {
  let value = obj[key];
  Object.defineProperty(obj, key, {
    get() {
      console.log(`监听到obj对象的${key}属性被访问了`);
      return value
    },
    set(newValue) {
      console.log(`监听到obj对象的${key}属性被设置值`)
      value = newValue
    }
  })
})


obj.name = "kkk"
obj.age = 12



console.log(obj.name)
obj.name = "kang"
console.log(obj.name)
console.log(obj.age)


// 也有弊端，即新增属性不能被监听
obj.height = 1.88;



