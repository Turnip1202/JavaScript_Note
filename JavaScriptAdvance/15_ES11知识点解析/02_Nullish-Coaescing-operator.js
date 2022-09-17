// ES11:空值合并运算符

const foo = undefined;
const bar = foo || "default value";
const baz = foo ?? "defualt value";
console.log(bar, baz)
