// 算法1
//  通过key-value的方式存储,对value进行自增
function getMaxCount1(str) {
  let json = {}
  //遍历str的每一个字符，得到key-value形式的对象
  for (let i = 0; i < str.length; i++) {
    // 判断json中是否有当前的str的值
    if (!json[str.charAt(i)]) json[str.charAt(i)] = 1;
    else json[str.charAt(i)]++;
  }
  let maxCountChar = "";
  let maxCount = 0;
  for (let key in json) {
    if (json[key] > maxCount) {
      maxCount = json[key];
      maxCountChar = key;
    }
  }
  return "出现次数最多的值是：" + maxCountChar + ", 出现次数为： " + maxCount
}

let str = "helloJavaScripthellohtmlhellocss"
let result1 = getMaxCount1(str)
console.log(result1)


//算法2
function getMaxCount2(str) {
  let json = {};
  let maxCount = 0;
  let maxCountChar = '';
  str.split('').forEach((item) => {
    //判断json对象中是否有对应的key
    if (!json.hasOwnProperty(item)) {
      // 当前字符出现的次数(字符作为分隔符)
      let number = str.split(item).length - 1;
      // 直接与字符最大值进行比较
      if (number > maxCount) {
        json[item] = number;
        //更新maxCount与maxCountChar的值
        maxCount = number;
        maxCountChar = item
      }
    }
  });
  return `出现最多的值是：${maxCountChar}, 出现的次数为${maxCount}`
}

let result2 = getMaxCount2(str)
console.log(result2)

//算法3
function getMaxCount3(str) {
  let maxCount = 0;
  let maxCountChar = "";
  str = str.split('').sort().join('');
  // console.log(str)
  for (let i = 0, j = str.length; i < j; i++) {
    // 这里i是排序后字串对应字符重复的起始位置，lastIndexOf找到的是终点位置
    let char = str[i];
    let charCount = str.lastIndexOf(char) - i + 1;
    if (charCount > maxCount) {
      maxCount = charCount;
      maxCountChar = char;
    }
    i = str.lastIndexOf(char);
  }
  return `出现最多的值是：${maxCountChar}, 出现的次数为：${maxCount}`
}
let result3 = getMaxCount3(str)
console.log(result3);

// 算法4
function getMaxCount4(str) {
  let maxCount = 0;
  let maxCountChar = "";
  str = str.split('').sort().join('');
  let reg = /(\w)\1+/g;
  let arr = str.match(reg);
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    let length = arr[i].length;//字符串的长度
    if (length > maxCount) {
      maxCount = length;
      maxCountChar = arr[i][0];//取字符串
    }
  }
  return `出现最多的值是：${maxCountChar}, 出现次数为${maxCount}`
}
let result4 = getMaxCount4(str)
console.log(result4);

//算法5
function getMaxCount5(str) {
  let maxCount = 0;
  let maxCountChar = '';
  while (str) {
    let originCount = str.length;
    let char = str[0];
    let reg = new RegExp(char, 'g');// 字符串对应的正则匹配
    str = str.replace(reg, '');
    let remainCount = str.length;
    let charCount = originCount - remainCount;
    if (charCount > maxCount) {
      maxCount = charCount;
      maxCountChar = char
    }
  }

  return `出现最多的值是：${maxCountChar}, 出现次数为：${maxCount}`
}
let result5 = getMaxCount5(str);
console.log(result5)

