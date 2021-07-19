const Koa = require('koa')
const Router = require('koa-router')
const jwt = require('jsonwebtoken')

const app = new Koa()

const testRouter = new Router()

const SECRET_KEY = 'abcde'

testRouter.get('/test', (ctx, next) => {

  const user = { id: 1, name: 'ab' }
  const token = jwt.sign(user, SECRET_KEY, {
    expiresIn: 10
  })

  ctx.body = token
})

testRouter.get('/demo', (ctx, next) => {
  const token = ctx.header.authorization.replace('Bearer ', '')

  try {
    const result = jwt.verify(token, SECRET_KEY)
    ctx.body = result
  } catch (error) {
    ctx.body = 'token已失效'
  }
})

app.use(testRouter.routes())
app.use(testRouter.allowedMethods())

app.listen(8000, () => {
  console.log('server is running 8000');
})