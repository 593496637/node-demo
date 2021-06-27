const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
  const isLogin = false
  if (!isLogin) {
    ctx.app.emit('error', new Error('未登录'), ctx)
  }
})

app.on('error', (err, ctx, next) => {
  ctx.status = 401
  ctx.body = '还没登录'
})

app.listen(8000, (ctx, next) => {
  console.log('服务已启动');
})