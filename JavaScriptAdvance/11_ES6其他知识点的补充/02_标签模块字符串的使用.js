// 第一个参数依然是模板字符串中整个字符拆,只是被切成多块,放到一个数组中
// 第二个参数是是模板字符串中,第一个${}
function foo(m, n, x) {
  console.log(m, n, x)
}

foo("Hello", "World")

foo``

const name = "turnip"
const age = 18;

foo`Hello ${name}Wo${age}rld`