const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {

  // ctx.response.body 等价于  ctx.response
  // ctx.response.body = { name: '小花', age: 15 }
  ctx.status = 400
  ctx.body = [1, 2, 3]
})


app.listen(8000, (ctx, next) => {
  console.log('服务已启动');
})