const Koa = require('koa')
const app = new Koa()
const userRouter = require('./router/user')

app.use((ctx, next) => {
  next()
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
  console.log('启动');
})