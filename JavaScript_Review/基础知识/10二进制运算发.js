
var x = 1;
var y = 2;
x = x ^ y;
y = y ^ x;
x = x ^ y;
// x ^= y;
// y ^= x;
// x ^= y;
console.log(x, y);
console.log(~~2.71828)