const names = ["t", "u", "r"]

//不可以使用const
for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}

for (const item of names) console.log(item);