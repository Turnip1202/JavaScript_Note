{
  let set = new Set()
  set.add(1)
  set.add("1");
  set.add(NaN)
  set.add(NaN)
  console.log(set)
}
//数组去重
{
  let arr = [1, 2, 3, 3, 4, 4, 5, 2, 6]
  console.log(new Set(arr))
}
{
  let arr1 = [1, 2, 3, 4]
  let arr2 = [2, 3, 4, 5, 6]
  let set1 = new Set([...arr1, ...arr2])
  console.log(set1)
}

//Set和数组的转换
{
  //数组转化为Set
  let arr = [1, 2, 3, 4, 5]
  let set = new Set(arr)
  console.log(set)

  //Set转化为数组
  let set1 = new Set()
  set1.add("a")
  set1.add("b")
  let arr1 = Array.from(set1)
  console.log(arr1)
  //将Set通过扩展运算符转化为数组
  let arr2 = [...set1]
  console.log(arr2)
}

//Set的遍历
{
  let set = new Set([4, 5, "hello"])
  set.forEach((item, index) => console.log(item, index))
}
{
  let set = new Set(["red", "green", "blue"])
  console.log(set.keys());//[Set Iterator] { 'red', 'green', 'blue' }
  for (let item of set.keys()) console.log(item)
  console.log(set.values())
  console.log(set.entries())
  for (let item of set.entries()) console.log(item)
}


//Map基本操作
{
  const map = new Map([["name", "turnip"], ["age", 123]]);
  console.log(map);
}
{
  const map = new Map()
  map.set(1, "aaa").set(1, "bbb").set(2, "ccc")
  console.log(map.get(1))
}
{
  let map = new Map();
  map.set(-0, 123)
  console.log(map.get(+0))
}

{
  let arr = [0];
  const map = new Map();
  map.set(arr, "0");
  map.set(arr, "1");
  console.log(map)
}

// Map的遍历
{
  const map = new Map();
  map.set("name", "turnip").set("age", 12);
  map.forEach((item, key) => console.log(item, key));
  for (let key of map.keys()) console.log(key)
  for (let value of map.values()) console.log(value)
  for (let obj of map.entries()) console.log(obj)
  console.log(Object.fromEntries(map.entries()))//转化为对象
}
//Map与其他数据解构的转换
{//Map转化为数组
  const map = new Map();
  map.set("name", "turnip").set("age", 12)
  const arr = [...map]
  console.log(arr);
}
{//Map转化为对象
  const arr = [["name", "turnip"], ["age", 12]]
  const map = new Map(arr)
  console.log(map)
  function mapToObj(map) {
    let obj = {}
    for (let [key, value] of map) obj[key] = value
    return obj
  }
  console.log(mapToObj(map))
  //对象转换为Map
  function objToMap(obj) {
    let map = new Map();
    for (let k of Object.keys(obj)) {
      map.set(k, obj[k])
    }
    return map
  }
  console.log(objToMap({ yes: true, no: false }))

  //Map转换为JSON
  function mapToJSON(strMap) {
    return JSON.stringify(mapToObj(strMap))
  }
  let myMap = new Map().set("yes", true).set("no", false)
  console.log(mapToJSON(myMap))
}

{
  //Map通过数组转换为JSON
  function mapToArrayJSON(map) {
    return JSON.stringify([...map])
  }
  let myMap = new Map().set(true, 1).set({ foo: 3 }, ["turnip"])

  console.log(mapToArrayJSON(myMap))
}

{ //JSON转化为Map
  function objToMap(obj) {
    let map = new Map();
    for (let k of Object.keys(obj)) {
      map.set(k, obj[k])
    }
    return map
  }
  function jsonToMap(jsonStr) {
    return objToMap(JSON.parse(jsonStr))
  }
  let map = jsonToMap(`{"yes":true,"no":false}`)
  console.log(map)
}
{ //Set转化为Map
  function setToMap(set) {
    return new Map(set)
  }
  const set = new Set([['foo', 1], ["bar", 2]])
  console.log(setToMap(set))
}
{ //Map实例转换为Set
  function mapToSet(map) {
    let set = new Set();
    for (let [k, v] of map) {
      set.add([k, v])
    }
    return set
  }
  const map = new Map().set("yes", true).set("no", false)
  console.log(mapToSet(map))

}
