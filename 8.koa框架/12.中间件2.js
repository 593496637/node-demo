const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()


// 路由级中间件
router.get('/', async (ctx, next) => {
  console.log('路由级中间件1');
  ctx.body = '路由页面1'
  await next()
})

router.get('/', async (ctx, next) => {
  console.log('路由级中间件2');
  ctx.body = '路由页面2'
  await next()
})


// 应用级中间件
app.use(async (ctx, next) => {
  console.log('应用级中间件');
  await next()  //不写next的话，后面的就匹配不到了，控制先进后出的机制
  if (ctx.status === 404) {
    ctx.body = '404'
  }
})

app.use(router.routes())
app.listen(3000)
