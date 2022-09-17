// 1,场景一for of场景

// 2,展开语法（spread syntax）
const iterableObj = {
  names: ["turnip", "kang", "kkkk"],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.names.length) return { done: false, value: this.names[index++] }
        else return { done: true, value: undefined }
      }
    }
  }
}

const names = ["kang", "turnip", "kkk"];
const newNames = [...names, ...iterableObj]
console.log(newNames)


const obj = { name: "turnip", age: 19 };//对象不可以for of

// ES9(ES2018)中新增的一个特性，用的不是迭代器
const newObj = { ...obj }
console.log(newObj)

// 3.解构语法
const [name1, name2] = names
const { name, age } = obj;//ES9新增的对象增强写法（内部不是迭代器）


// （这些均需要 or 可以传入一个可迭代对象）
// 4，创建一些其他对象时
const set1 = new Set(iterableObj)
const set2 = new Set(names)

const arr1 = Array.from(iterableObj);

// 5,Promise.all
Promise.all(iterableObj).then(res => console.log(res))

