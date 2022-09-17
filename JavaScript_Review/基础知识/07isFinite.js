
console.log(isFinite(Infinity));//false
console.log(isFinite(-Infinity));//false
console.log(isFinite(NaN));//false
console.log(isFinite(undefined));//false
console.log(isFinite(null));//true,null可以转换为0
console.log(isFinite(-1));//true
