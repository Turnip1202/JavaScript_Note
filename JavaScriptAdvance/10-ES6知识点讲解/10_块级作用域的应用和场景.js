const btns = document.querySelectorAll("button");

//以前的做法
// for (var i = 0; i < btns.length; i++) {
//   (function (n) {
//     btns[i].addEventListener("click", () => console.log(`第 ${n} 个按钮被点击`))
//   })(i)
// }

// console.log(i);//4

// 现在的做法
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => console.log(`第${i}个按钮被点击`))
}

console.log(i); //ReferenceError: i is not defined