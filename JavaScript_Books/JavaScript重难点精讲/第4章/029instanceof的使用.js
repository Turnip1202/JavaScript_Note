//instanceof会查询原型链
// 手写instanceof
function T_instanceof(L, R) {
  var O = R.prototype;
  L = L.__proto__;
  while (true) {
    if (L === null) return false;
    if (O === L) return true;
    L = L.__proto__;
  }
}
