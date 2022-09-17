function foo() {
  return "kang"
}
function bar() {
  return 123;
}
let flag = true;
let result: unknown;
if (flag) result;
else result = bar;
let message: string = result;
let num: number = result;
export { }