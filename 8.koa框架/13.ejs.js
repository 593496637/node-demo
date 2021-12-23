const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

app.use(bodyparser())
app.use(
  views('page', {
    map: { html: 'ejs' }
  })
)


router.post('/save', async (ctx, next) => {
  // 获取提交的数据
  let data = ctx.request.body
  console.log(data);
  ctx.body = data
})

router.get('/', async ctx => {
  const txt = '你好啊'
  await ctx.render('index', { txt })
})


app.use(async (ctx, next) => {
  ctx.state.commonData = '公共数据,每个页面都可以使用'
  await next()
  // 捕获404错误
  if (ctx.status === 404) {
    ctx.body = '404'
  }
})

app.use(router.routes())


app.listen(3000)