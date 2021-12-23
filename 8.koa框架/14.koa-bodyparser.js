const Koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()


router.post('/save', async (ctx, next) => {
  // 获取提交的数据
  let data = ctx.request.body
  ctx.body = data
})

router.get('/', async ctx => {
  ctx.body = '路由页面1'
})


app.use(async (ctx, next) => {
  await next()
})

app.use(router.routes())


app.listen(3000)


// 启动后访问index.html