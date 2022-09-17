// ES11之前 max_safe_integer
const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt);//9007199254740991
console.log(maxInt + 1);
console.log(maxInt + 2);


//ES11之后：BigInt
const bigInt = 9007199254740991n;
console.log(bigInt + 10n);//运算需要类型相同





const num = 100;
console.log(bigInt + BigInt(num));//将数字类型转换为大整数
const smallNum = Number(bigInt);//将大整数转换为数字类型
console.log(smallNum);














