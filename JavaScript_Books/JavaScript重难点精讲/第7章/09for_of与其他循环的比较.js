let arr = ["one", "two", "three"]
arr.forEach((item, index) => {
  if (index === 1) { return item; }
  console.log(item)
})
arr = [1, 2, 3]

arr.name = "turnip"
for (let key in arr) {
  console.log(key, typeof key)
}
for (let item of arr) {
  if (item === 2) break
  console.log(item)
}