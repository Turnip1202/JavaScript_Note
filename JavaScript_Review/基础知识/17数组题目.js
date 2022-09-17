var arr1 = ['a', 'b', 'c', 'd', 'e'];
var n = 2;
var arr2 = [];
for (let i = 0; i <= 15; i++) { 
  arr2[0] = arr1[3];
  arr2[1] = arr1[4];
  arr2[2] = arr1[0];
  arr2[3] = arr1[1];
  arr2[4] = arr1[2];
  // console.info('arr2'+arr2)
  arr1 = arr2;
  arr2 = [];
  console.info(`${i+1}次：`+arr1)

}




