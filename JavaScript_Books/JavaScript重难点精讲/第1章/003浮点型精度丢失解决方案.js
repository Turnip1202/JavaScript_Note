const operationObj = {
  getParam(args) {
    // return Array.prototype.concat.apply([], args);//把传入的参数放到一个数组中
    return args;
  },
  multiplier(x) {
      //拿到将小数变成整数的10的个数
    let parts = x?.toString().split(".");//将传入的值分割成数组
    return parts?.length < 2//判断是否有小数点
      ? 1 :
      Math.pow(10, parts[1]?.length);
  },
  correctionFactor() {
    let args = Array.prototype.slice.call(arguments);//将类数组arguments转化为普通数组
    let argArr = this.getParam(args);//基本无用
    return argArr?.reduce((accum, next) =>
    {
     let num = this.multiplier(next);
      return Math.max(accum, num)
  }, 1)
       }
  ,
  add(...args) {
    let calArr = this.getParam(args);
    let corrFactor = this.correctionFactor(calArr);//拿到
    let sum = calArr.reduce((accum, curr) => accum + Math.round(curr * corrFactor), 0);
    return sum / corrFactor;
  },
  subtract(...args) {
    let calArr = this.getParam(args);
    let corrFactor = this.correctionFactor(calArr);
    let diff = calArr.reduce((accum, curr, curIndex) => {
      if (curIndex === 1) {//把小数部分，变为整数在减
        return Math.round(accum * corrFactor) - Math.round(curr * corrFactor);
      }
      return Math.round(accum) - Math.round(curr * corrFactor)
    });
    return diff / corrFactor
  },
  multiply(...args) {
    let calArr = this.getParam(args);
    let corrFactor = this.correctionFactor(calArr)
    calArr = calArr.map(item => item * corrFactor);
    let multi = calArr.reduce((accum, curr) => Math.round(accum) * Math.round(curr),1)
    return multi / Math.pow(corrFactor, calArr.length);
  },
  divide(...args) {
    let calArr = this.getParam(args);
    let quotient = calArr.reduce((accum, curr) => {
      let corrFactor = this.correctionFactor(accum, curr);
      return Math.round(accum * corrFactor) / Math.round(curr * corrFactor)
    });
    return quotient;
  }

}


console.log(operationObj.add(0.1, 0.7))
console.log(operationObj.subtract(0.3,0.2))
console.log(operationObj.multiply(0.7, 180))
console.log(operationObj.divide(0.3, 0.1))