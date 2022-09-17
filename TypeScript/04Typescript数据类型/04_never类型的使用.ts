function foo(): never {
  while (true) { }
}

function bar(): never {
  throw new Error()
}
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case "string":
      console.log("string处理方式, 处理message");
      break;
    case "number":
      console.log("number处理方式, 处理message");
      break;
    case "boolean":
      console.log("boolean处理方式, 处理message")
      break;
    default:
      const check: never = message;
  }
}
handleMessage("abc");
handleMessage(123);
handleMessage(true);