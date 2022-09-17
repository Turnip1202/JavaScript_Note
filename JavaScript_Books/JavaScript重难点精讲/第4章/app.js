const Koa = require("koa");
const app = new Koa();
const fs = require("fs");
const Router = require('koa2-router');
const koaBody = require('koa-body');
const cors = require("koa2-cors"); //处理跨域
const path = require("path");
// console.log(path.join(__dirname, "/file"))
const router = new Router();
app.use(cors({ //使用跨域中间件
  origin: "*",
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
  maxAge: 100,
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));


let data = fs.readFileSync("./module.html", 'utf-8');
app.use(koaBody({
  // 如果不加multipart：true ctx.request.body会获取不到值
  multipart: true,
  formidable: {
    maxFileSize: 100 * 1024 * 1024,
    uploadDir: path.join(__dirname, './file'),
    keepExtensions: true,
    multiples: false
  }
}))
app.use(router);
router.get("/", ctx => {
  //JSONP就是这里将函数解析出来，在这里调用函数，并把数据传递过去
  // console.log(JSON.parse(JSON.stringify(ctx.query))) 
  ctx.body = data;
});
router.get("/kang", ctx => {
  ctx.body = "saass"
})
router.post("/turnip", ctx => {
  let data = ctx.request.body
  let data_file = ctx.request.files;
  // console.log(data_file)
  console.log(data);
  ctx.body = "200";
})
app.listen(3000, err => {
  if (err) {
    console.log(err)
  }
  console.log("监听成功:http://127.0.0.1:3000/",)
})