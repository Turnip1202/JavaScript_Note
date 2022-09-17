const obj = {
  name: "turnip",
  age: 18,
  height: 1.88
}
const entries = Object.entries(obj);//转化为entries列表   [ [ 'name', 'turnip' ], [ 'age', 18 ], [ 'height', 1.88 ] ]
console.log(entries);


// ES10之前
const newObj1 = {}
for (const entry of entries) {
  newObj1[entry[0]] = entry[1]
}
console.log(newObj1)





// 1, ES10新增了Object.fromEntries方法
const newObj = Object.fromEntries(entries);
//将entries转化为数组
console.log(newObj);//{ name: 'turnip', age: 18, height: 1.88 }

// 2, Object.fromEntries的应用场景
const queryString = `name=turnip&age=19&height=1.88`;
const queryParams = new URLSearchParams(queryString);//解析成类对象
console.log(queryParams);//URLSearchParams { 'name' => 'turnip', 'age' => '19', 'height' => '1.88' }
for (const param of queryParams) {//可以使用for..of遍历
  console.log(param)
}
const paraObj = Object.fromEntries(queryParams)
console.log(paraObj)