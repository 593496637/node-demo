const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// 配置路由
router.get('/', async ctx => {
  // ctx context request response
  // query querystring
  // res.writeHead()  res.end()
  // console.log(ctx.request.query); //{ title: '哈哈?age=22' }
  // console.log(ctx.request.querystring);  //title=哈哈?age=22

  // 推荐的方式
  // console.log(ctx.query);
  // console.log(ctx.querystring);
  ctx.body = '首页'
})

// 动态路由
router.get('/:id', async ctx => {
  console.log(ctx.params.id);
  ctx.body = '动态'
})

router.get('/about', async ctx => {
  ctx.body = '介绍'
})

// 启动路由
app
  .use(router.routes())
  // 官方推荐
  .use(router.allowedMethods())


app.listen(3000)

// http://localhost:3000/?title=haha?age=22
// http://localhost:3000/122111