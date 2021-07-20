const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const jwt = require('jsonwebtoken')

const app = new Koa()

const testRouter = new Router()


// 在项目中的任何一个地方的先对路径，都是对应与process.cwd()
// fs.readFileSync 查找文件的时候是相对于启动项目的那个目录
// 如果从当前项目的父级目录启动项目，则需要在fs的代码里加上父级目录
console.log(process.cwd());

const PRIVATE_KEY = fs.readFileSync('./keys/private.key')
const PUBLIC_KEY = fs.readFileSync('./keys/public.key')

testRouter.get('/test', (ctx, next) => {

  const user = { id: 1, name: 'ab' }
  const token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 20, //秒
    algorithm: 'RS256'
  })

  ctx.body = token
})

testRouter.get('/demo', (ctx, next) => {
  const token = ctx.header.authorization.replace('Bearer ', '')

  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256']
    }) 
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