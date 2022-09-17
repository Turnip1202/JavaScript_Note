
let dataStore = {
  noDelete: 1234,
  oldMethod: function () { },
  doNotChange: "tried and true"
};
let NO_DELETE = ["noDelete"];
let DEPRECATED = ["oldMethod"];
let NO_CHANGE = ["doNotChange"];
const proxy = new Proxy(dataStore, {
  set(target, key, value, proxy) {
    if (NO_CHANGE.includes(key)) {
      throw Error(`Error!${key} isimmutable.`);
    }
    return true;
  },
  deleteProperty(target, key) {
    if (NO_DELETE.includes(key)) {
      throw Error(`Error! ${key} cannot be deleted.`);
    }
    return true;
  },
  get(target, key, proxy) {
    if (DEPRECATED.includes(key)) {
      console.warn(`Warning!${key} is deprecated.`);
    }
    const val = target[key];
    return typeof val === "function" ? function (...args) { val.apply(null, args); } : val;
  }
})

proxy.doNotChange = "foo";
delete proxy.noDelete;
proxy.oldMethod();




function* foo() {
  yield "turnip";
  yield "kang";
  yield "kkk"
}
const t = foo();
console.log(t.next().valueOf())