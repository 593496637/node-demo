const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const multer = require('koa-multer')

const app = new Koa()
const router = new Router({ prefix: '/users' })

const upload = multer()

app.use(bodyParser())

app.use((ctx, next) => {
  ctx.response.body = "hello world1"
  next()
})

router.get('/', (ctx, next) => {
  console.log(ctx.request.body);
  ctx.response.body = "hello world2"
})

router.get('/login', upload.any(), (ctx, next) => {
  console.log(ctx.req.body);
  ctx.response.body = 'hello world'
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8000, () => {
  console.log('启动');
})