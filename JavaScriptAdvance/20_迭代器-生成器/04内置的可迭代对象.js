const names = ["turnip", "kang", "kkkk"]
console.log(names[Symbol.iterator])
const iterator = names[Symbol.iterator]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


for (const item of names) console.log(item)


// Map和Set均为可迭代对象
const set = new Set();
set.add(19)
set.add(190)
set.add(1900)
console.log(set[Symbol.iterator])
for (const item of set) console.log(item)

// 函数中的arguments也是一个可迭代对象
function foo(x, y, z) {
  console.log(arguments[Symbol.iterator])
  for (const arg of arguments) console.log(arg)
}

foo(10, 20, 30)


