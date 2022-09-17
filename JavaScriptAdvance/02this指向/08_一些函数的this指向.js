// 1.setTimeout
function tkSetTimeout(fn, duration) {
  fn()
}

// tkSetTimeout(function () {
//   console.log(this);//window
// }, 3000)
// setTimeout(function () {
//   console.log(this);//window
// }, 1000);

// 2.监听点击
const boxDiv = document.querySelector(".box")
boxDiv.onclick = function () {
  console.log(this);//出发点击的元素
}
boxDiv.addEventListener("click", function () {
  console.log(this)
});

