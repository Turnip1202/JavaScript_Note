//算法1：
// 借助split方法将字符串转化为数组，在调用数组的reverse方法
function reverseString1(str:string):string {
  return str?.split('')?.reverse()?.join('');
}
let result1:string= reverseString1("turnip");
console?.log(result1);


//算法2
// 通过for倒序遍历，然后在拼接
function reverseString2(str: string):string{
  let result: string = '';
  //倒序遍历字符串，并且拼接
  for (let i: number = str?.length - 1; i >= 0; i-- ) result += str?.charAt(i)
  return result;
}
let result2: string = reverseString2("turnip");
console?.log(result2);

//算法3
// 和算法2类似。使用递归的方式进行倒序、拼接
function reverseString3(strIn: string, pos: number, strOut: string): string{
  if (pos < 0) return strOut;
  strOut += strIn.charAt(pos--);
  return reverseString3(strIn, pos, strOut);
}
let str:string = "turnip";
let result: string = "";
let result3: string = reverseString3(str, str?.length - 1, result);
console?.log(result3);

//算法4
//和算法1类似，先转化为数组，然后调用数组的reverse方法
function reverseString4(str: string): string{
  //对字符拆调用slice方法，将字符串转化为一个数组
  let arr = Array?.prototype?.slice?.call(str);
  //调用数组的reverse方法
  return arr?.reverse()?.join('');
}
let result4: string = reverseString4("turnip")
console?.log(result4);

//算法5：
// 利用栈的特性（先进后出），分别入栈，然后再出栈拼接
//手写简单的栈结构
function Stack(){
  this.data = [];
  this.top = 0;
}
//改变栈的原型对象，使其使用自定义栈方法
Stack.prototype = {
  //入栈：现在栈顶添加元素，然后元素个数加1
  push(element) {
    this.data[this.top ++] = element 
  },
  pop:function() {
    return this.data[--this.top];
  },
  length:function() {
    return this.top
  }
}
 //使用自定义栈
function reverseString5(str){
  //创建栈实例
  let strStack = new Stack();
  // 将字符串转化为数组
  let arr = str.split('');
  let length = arr.length;
  let result = '';
  //将元素压入进栈
  for (let i = 0; i < length; i++) { 
    strStack.push(arr[i])
  }
  //出栈并拼接字符串
  for (let j = 0; j < length; j++) { 
    result +=   strStack.pop(j)
  } 
  return result;
}
let result5 = reverseString5("trunip");
console.log(result5)


export{}
