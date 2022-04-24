const Koa = require('koa')
const Router = require('koa-router')
const Session = require('koa-session')

const app = new Koa()

const testRouter = new Router()

// 创建Session配置
const session = Session({
  key: 'sessionId',
  maxAge: 10 * 1000,//cookie的有效期
  signed: true //sha256的签名，防止cookie被篡改
}, app)
app.keys = ['aaa']
app.use(session)


testRouter.get('/setSession', (ctx, next) => {

  const id = 10;
  const name = 'abc'

  ctx.session.user = { id, name }
  ctx.body = 'test-session'
})

testRouter.get('/getSession', (ctx, next) => {
  console.log(ctx.session.user);
  ctx.body = 'session'
})

app.use(testRouter.routes())
app.use(testRouter.allowedMethods())

app.listen(8000, () => {
  console.log('server is running 8000');
})