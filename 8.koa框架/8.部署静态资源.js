const Koa = require('koa')
const app = new Koa()
const staticAssets = require('koa-static')

app.use(staticAssets('./build'))

app.listen(8000, (ctx, next) => {
  console.log('服务已启动');
})