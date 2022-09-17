{
  const promise = new Promise((resolve, reject) => {
    console.log("1")
    resolve();
    console.log("2")
  });
  promise.then(() => {
    console.log(3)
  });
  console.log(4)
}


{
  const promise = new Promise((resolve, reject) => {
    resolve("success1");
    reject("error")
    resolve("success2")
  });
  promise.then((res) => { console.log(res) }).catch((err) => { console.log(err) })
}


{
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("once")
      resolve("success")
    })
  })
  let start = Date.now();
  promise.then((res) => {
    console.log(res, Date.now() - start)
  })
  promise.then((res) => {
    console.log(res, Date.now() - start)
  })
}

{
  Promise.resolve().then((res) => {
    console.log(1);
    return new Error("error!")
  }).then((res) => {
    console.log(2)
    console.log("then:", res)
  }).catch((err) => {
    console.log(3);
    console.log("catch", err)
  })
}

{//值穿透现象
  Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)
}


{
  Promise.resolve().then(
    function success(res) {
      throw new Error("error")
    },
    function faill(err) {
      console.log("faill:", err)
    }
  ).catch(function fail2(err) {
    console.log("fail2:", err)
  })
}