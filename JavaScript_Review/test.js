// let app = require('./01函数')
// console.log(app);
let Quo = function (string) {
  this.status = string
}
let a = { status: 'turnip' }

Quo.prototype.get_status = function () {
  return this.status;
}
let statu = Quo.prototype.get_status.apply(a)
console.log(statu) 