const Koa = require('koa');
const app = new Koa()

// use注册中间件
app.use((ctx, next) => {
  if (ctx.request.url === '/login') {
  if (ctx.request.method === 'GET') {
    console.log('这儿');
    ctx.response.body = 'login'
  }
} else {
  ctx.response.body = 'other'
}
})

app.listen(8000, () => {
  console.log('服务已启动');
})