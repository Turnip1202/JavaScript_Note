const weakSet = new WeakSet();

// 1,区别一：只为存放对象类型
//TypeError:Invalid value used in weak set
// weakSet.add(10);

// 强引用和弱引用的概念(看图)

// 2，区别二：对对象是一个弱引用
let obj = { name: "turnip" }

weakSet.add(obj)

const set = new Set()
//建立的是强引用
set.add(obj)

//建立的是弱引用
weakSet.add(obj)


// 3,WeakSet的应用场景
const personSet = new WeakSet()

class Person {
  constructor() {
    personSet.add(this)
  }

  running() {
    if (!personSet.has(this)) {
      //不能直接使用显示绑定调用
      throw new Error("不能通过非构造方法创建出来对象调用running方法")
    }
    console.log("running~", this)
  }
}


const p = new Person()
// p.running()
// p = null;
p.running.call({ name: "turnip" })