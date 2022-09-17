// 编写箭头函数
// 1,():参数
// 2,=>:箭头
// 3,{}：函数执行体
var foo = (num1, num2, num3) => {
  console.log(num1, num2, num3);
  var result = num1 + num2 + num3;
  console.log(result)
};
function bar(num1, num2, num3) {

}


//高阶函数也可以传入箭头函数
var nums = [10, 20, 45, 78];
nums.forEach((item, index, arr) => { });


//箭头函数的简写
// 简写一
nums.forEach(item => {
  console.log(item);
})


// 简写二
nums.forEach(item => console.log(item));
var newNums = nums.filter(item => item % 2 === 0)
console.log(newNums);

//函数式编程
var result = nums.filter(item => item % 2 === 0)
  .map(item => item * 100)
  .reduce((preValue, item) => preValue + item);
console.log(result);


//简写三：返回对象
var bar = () => ({ name: "turnip", age: 18 });
