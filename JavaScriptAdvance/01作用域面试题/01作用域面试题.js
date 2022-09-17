var n = 100;
function foo() { 
  n = 200;
  return true;
};
foo();
console.log(n);