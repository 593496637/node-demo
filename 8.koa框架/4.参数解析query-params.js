const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

const userRouter = new Router({ prefix: '/users' })

// localhost:8000/users/12?aa=11&bb=22
userRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.query);
  console.log(ctx.request.params);
  ctx.response.body = 'hello'
})

app.use(userRouter.routes())

// app.use((ctx, next) => {
//   console.log(ctx.request.url);
//   console.log(ctx.request.query);
//   console.log(ctx.request.params);
//   ctx.response.body = 'hello world'
// })

app.listen(8000, () => {
  console.log('启动');
})