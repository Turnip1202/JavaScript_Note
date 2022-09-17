const info = {
  name: "turnip",
  friend: {
    girlFriend: {
      name: "LHM"
    }
  }
}

console.log(info.friend.girlFriend.name)
if (info && info.friend && info.friend.girlFriend) {
  console.log(info.friend.girlFriend)
}


// ES11提供了可选链 （Optional Chaining）
console.log(info?.friend?.girlFriend?.name);