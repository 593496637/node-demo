const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

const testRouter = new Router()

testRouter.get('/setCookie', (ctx, next) => {
  ctx.cookies.set('name', 'lily', {
    maxAge: 50 * 1000
  })
  ctx.body = '设置cookie'
})

testRouter.get('/getCookie', (ctx, next) => {
  const cookie = ctx.cookies.get('name')
  ctx.body = `获取cookie:${cookie}`
})

app.use(testRouter.routes())
app.use(testRouter.allowedMethods())

app.listen(8000, () => {
  console.log('server is running 8000');
})