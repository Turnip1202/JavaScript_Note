function foo() { }



console.log(foo.prototype)
const f = new foo()
console.log(f.__proto__ === foo.prototype)


const bar = () => {
  console.log(this, arguments)
}

console.log(bar.prototype)
const b = new bar();//TypeError:bar is not a constructor