const target = { name: "turnip" }
const queueObervers = new Set();
function observer1(prop, value) {
  console.log(`目标对象的${prop}属性值变为${value},观察者1开心的笑了`)
}
function observer2(prop, value) {
  console.log(`目标对象的${prop}属性值变为${value},观察者2开心的笑了`)
}
function set(target, prop, value) {
  const result = Reflect.set(target, prop, value)
  result ? queueObervers.forEach(fn => fn(prop, value)) : false;
  return result;
}
const observer = (fn) => queueObervers.add(fn)
const observeable = (target) => new Proxy(target, { set })
const proxy = observeable(target)
observer(observer1)
observer(observer2)
proxy.name = "kang"