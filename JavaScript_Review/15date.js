function formatDate(d) {
  if (!d instanceof Date) return;
  var year = d.getFullYear();
  var month = d.getMonth();
  var date = d.getDate();
  var hour = d.getHours();
  var minute = d.getMinutes(); 
  var second = d.getSeconds();
  var week = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
  return year + '年' + month + '月' + date + '日' + hour + '时' + minute + '分' + second + '秒，星期'+week;
}
console.log(formatDate(new Date()));