let names = ["abc", "cba", "nba"];
// let item1 = names[0];
// let item2 = names[1];
// let item3 = names[2];

// 对数组的解构：[]
let [item1, item2, item3] = names;
console.log(item1, item2, item3);

// 解构后面的元素
let [, , itemz] = names;
console.log(itemz);

// 解构出一个元素，后面的元素放到一个数组中 
let [itemx, ...newNames] = names
console.log(itemx, newNames);

// 解构的默认值
let [itema, itemb, itemc, itemd = "turnip"] = names
console.log(itemd)