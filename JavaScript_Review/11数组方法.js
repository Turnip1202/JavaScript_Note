// forEachc
var arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach((current, index, array) => { console.log(current, index, array) });

//手写TforEach
Array.prototype.TforEach = function (callback) { 

    for (var i = 0, len = this.length; i < len; i++) { 
      callback(arr[i],i,this)
    }
  
}
arr.TforEach((current,index,array) => { 
  console.log(current, index, array);
})

var array = [5, 6, 35, 2, 3];
console.log(array.sort())
console.log(array.sort((a, b) => a - b));

// includes严格判断是否包含指定值
console.log(arr.includes('b'));
console.log(arr.reverse())


// 数组降维flat  不会改变原数组
var arr1 = [5,[7,8,[10,11,12],9], 6, 35, 2, 3];
console.log(arr1.flat(3))

//reduce降维,一次一维
let res = arr1.reduce((acc, curr) => acc.concat(curr),[]).reduce((acc, curr) => acc.concat(curr),[])
console.log(res)


let b = new Boolean(false);
console.log(b.valueOf())//返回原始值


let t = arr1.some((curr, idx, arr) => curr === 7);//找东西，找到就是true
console.log(t)
let k = res.every((curr, idx, arr) => typeof curr === 'number');//检查数组所有元素，是否满足条件
console.log(k)

