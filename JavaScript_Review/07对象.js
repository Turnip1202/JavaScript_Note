var obj = {
  a: 1,
  b: 2,
  c: 3
};
for (var key in obj) {//for in 一般是用来遍历对象的，不适合遍历数组
  console.log(key, obj[key]);
  console.log(key, obj.key);//这里相当于做了obj['key'];
}
// for (var key of obj) {
//   console.log(key);
// }