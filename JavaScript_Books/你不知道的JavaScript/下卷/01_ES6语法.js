Object.prototype.log = function () {
  console.log(this);
}


if (!Object.is) {
  Object.is = function (v1, v2) {
    //检查-0
    if (v1 === 0 && v2 === 0) return 1 / v1 === 1 / v2;
    //检查NaN
    if (v1 !== v1) return v2 !== v2;//这里是NaN的特性
    //检查其余所有情况
    return v1 === v2;
  }
}


// 2.1 块级作用域声明
var a = 2;
(function IIFE() {
  var a = 3;
  console.log(a);//3
})();
console.log(a);//2




// 2.1.1 let声明
var a = 2;
{
  let a = 3;
  console.log(a);//3
}
console.log(a);//2





{
  console.log(a);//undefined
  console.log(b);//ReferenceError:Cannot access 'b' before initialization
  var a;
  let b;
}

{
  //a 未声明
  if (typeof a === "undefined") console.log("cool");
  //b声明了，但还处于TDZ
  if (typeof b === "undefined")//Cannot access 'b' before initialization
    console.log("TDZ")

  let b;
}



var funcs = [];
for (let i = 0; i < 5; i++) {
  funcs.push(function () {
    console.log(i);
  })
}
funcs[3]();

//上面的let事实上相当于做了下面的操作
var funcs = [];
for (var i = 0; i < 5; i++) {
  let j = i;
  funcs.push(function () {
    console.log(j);
  })
}
funcs[3]();


// 2.1.2 const声明
{
  const a = 2;
  console.log(a);//2
  a = 3;//TypeError: Assignment to constant variable.
}

{
  const a = [1, 2, 3];
  a.push(4);
  console.log(a);//[1.2.3.4]
  a = 42;//TypeError: Assignment to constant variable.
}


{

}

