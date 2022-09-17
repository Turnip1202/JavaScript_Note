const info = {
  name: "turnip",
  firend: { name: "kobe" }
}
const obj = {
  ...info, name: "turnip"
}

console.log(obj)
obj.firend.name = "turnip"
console.log(info.firend.name)