const fs = require("fs");
fs.writeFile("test.txt", "哈哈", { flag: "a" }, () => {
  console.log("写入成功")
})