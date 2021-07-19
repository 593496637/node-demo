const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

const testRouter = new Router()

testRouter.get('/test', (ctx, next) => {
  ctx.cookies.set('name', 'lily', {
    maxAge: 50 * 1000
  })
  ctx.body = 'test'
})

testRouter.get('/demo', (ctx, next) => {
  const cookie = ctx.cookies.get('name')
  ctx.body = `cookie:${cookie}`
})

app.use(testRouter.routes())
app.use(testRouter.allowedMethods())

app.listen(8000, () => {
  console.log('server is running 8000');
})