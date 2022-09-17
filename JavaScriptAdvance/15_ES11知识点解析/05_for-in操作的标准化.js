// ECMA对  for..in 的标准化

const obj = {
  name: "turnip",
  age: 19
}

for (const item in obj) {
  console.log(item, obj[item]);//key
}