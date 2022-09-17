//&&的优先级大于||。但基本是先算谁均可
console.log(2 ** 2 ** 3);//256   优先算后面的2的3次方
console.log(true == 2);//false  true会隐式转换为1，进行对比。==会两边均转换对比
console.log('0' == false);//true
console.log(null == undefined);//true
console.log(NaN == false);//NaN不管做任何比较均为false
console.log(!!NaN);//false

var val = 1;
console.log('Value is ' + (val != '0') ? 'define' : 'undefine');
console.log(null == undefined);//true
console.log(null >= undefined);//false
console.log(null >= 0);//true
console.log(undefined >= 0);//false