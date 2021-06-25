const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const multer = require('koa-multer')

const app = new Koa()
const router = new Router({ prefix: '/upload' })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname)
    console.log(uniqueSuffix);
    cb(null, uniqueSuffix)
  }
})

const upload = multer({ storage: storage })


router.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.req.file);
  ctx.response.body = "upload"
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8000, () => {
  console.log('启动');
})