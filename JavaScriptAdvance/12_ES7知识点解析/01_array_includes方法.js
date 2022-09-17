const names = ["abc", "cba", "nba", "mba", NaN];
if (names.indexOf("cba") !== -1) {
  console.log("包含cba元素")
}

// ES7  ES2016
if (names.includes("cba", 2)) {//第二个参数为从哪个索引开始
  console.log("包含cba元素")
}

if (names.indexOf(NaN) !== -1) {//这里找不到NaN,相比之下更加直观，更加严谨
  console.log("包含NaN")
}

if (names.includes(NaN)) {
  console.log("包含NaN")
}