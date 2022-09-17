// 1,flat的使用
const nums = [10, 20, [1, 2, 5], [[12, 34, 11], 13, [90, 98]], 22, 33];
const newNums = nums.flat()
console.log(newNums)

const newNums2 = nums.flat(2)
console.log(newNums2)


// 2,flatMap的使用
const nums2 = [10, 20, 30]
const newNums3 = nums2.flatMap(item => item * 2)
console.log(newNums3);

const newNums4 = nums2.map(item => item * 2)
console.log(newNums4);


//3， flatMap的应用场景
const message = ["Hello World", "hello LHM", "my name is turnip"]
const words1 = message.map(item => item.split(" "));
//会对回调函数的返回值进行降维
const words2 = message.flatMap(item => item.split(" "));
console.log(words1, words2)
