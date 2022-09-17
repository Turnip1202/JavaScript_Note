Date.prototype.T_format = function (pattern) {
  //补零函数
  function zeroize(num) {
    return num < 10 ? "0" + num : num;
  }
  //YYYY-MM-DD或YYYY-MM-DD HH:mm:ss
  let dateObj = {
    "y": this.getFullYear(),
    "M": zeroize(this.getMonth() + 1),
    "d": zeroize(this.getDate()),
    "H": zeroize(this.getHours()),
    "m": zeroize(this.getMinutes()),
    "s": zeroize(this.getSeconds())
  };
  return pattern.replace(/yyyy|MM|dd|HH|mm|ss/g, function (match) {
    switch (match) {
      case "yyyy":
        return dateObj.y;
      case "MM":
        return dateObj.M;
      case "dd":
        return dateObj.d;
      case "HH":
        return dateObj.H;
      case "mm":
        return dateObj.m;
      case "ss":
        return dateObj.s;
    }
  })
}

let d = new Date;
console.log(d.T_format("yyyy-MM-dd HH:mm:ss"));
console.log(d.T_format("yyyy-MM-dd"));
console.log(d.T_format("yyyy-MM-dd HH:mm"));



Date.prototype.T_format_S = function (fmt) {
  let o = {
    "M+": this.getMonth() + 1,//月
    "d+": this.getDate(),//日
    "H+": this.getHours(),//小时
    "m+": this.getMinutes(),//分
    "s+": this.getSeconds(),//秒
    "q+": Math.floor((this.getMonth() + 3) / 3),//季度
    "S": this.getMilliseconds()//毫秒
  };
  let reg = /(y)/g
  let result = fmt.match(reg).join("")
  // console.log(result)
  if (/(y+)/.test(fmt)) fmt = fmt.replace(result, (this.getFullYear() + "").substring(4 - result.length));
  for (let k in o) {

    if (new RegExp(`(${k})`).test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substring(("" + o[k]).length)));
  }
  return fmt
}
let d1 = new Date();
console.log(d1.T_format_S('yyyy-MM-dd HH:mm:ss.S'));
console.log(d1.T_format_S('yyyy-MM-dd'))
console.log(d1.T_format_S("yyyy-MM-dd q HH:mm:ss"));

// 日期校验
function GetDateStr(AddDayCount) {
  let dd = new Date;
  dd.setDate(dd.getDate() + AddDayCount);//Date对象的实例函数中提供的setDate函数
  let y = dd.getFullYear();
  //获取当前月份的日期，不足10补0
  let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
  let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();//获取当前几号
  return y + "-" + m + "-" + d;
}
console.log("半年前：" + GetDateStr(-180));
console.log("三个月前：" + GetDateStr(-90))
console.log("一个月前：" + GetDateStr(-30));
console.log("一个天前：" + GetDateStr(-1))
console.log("今天：" + GetDateStr(0))
console.log("明天：" + GetDateStr(1))
console.log("后天：" + GetDateStr(2))
console.log("一个月后：" + GetDateStr(30))
console.log("三个月后：" + GetDateStr(90))
console.log("半年后：" + GetDateStr(180));

//计算日期时间差
function GetDateDiff(startTime, endTime, diffType) {
  //将yyyy-MM-dd的时间格式转换为yyyy/MM/dd的时间格式
  startTime = startTime.replace(/\-/g, "/");
  endTime = endTime.replace(/\/-g/, "/");
  //将计算间隔类性字符转换为小写
  diffType = diffType.toLowerCase();
  let sTime = new Date(startTime);//开始时间戳
  let eTime = new Date(endTime);//结束时间戳
  //作为除数的数字
  let divNum = 1;
  switch (diffType) {
    case "second":
      divNum = 1000;
      break;
    case "minute":
      divNum = 1000 * 60;
      break;
    case "hour":
      divNum = 1000 * 3600;
      break;
    case "day":
      divNum = 1000 * 3600 * 24;
      break;
    default:
      console.log("无法计算")
      break
  }
  //进行四舍五入
  return Math.round(parseInt(eTime.getTime() - sTime.getTime()) / parseInt(divNum))
}
let result1 = GetDateDiff("2022-09-01 00:00:00", "2022-09-03 00:00:00", "day")
console.log(result1)
let result2 = GetDateDiff("2019-06-08 00:00:00", "2022-09-03 20:52:00", "hour")
console.log(result2)