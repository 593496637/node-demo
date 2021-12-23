const Koa = require('koa')
const app = new Koa()

// 中间件1
const m1 = async (ctx, next) => {
  console.log(1);
  await next()
  console.log(6);
}
// 中间件2
const m2 = async (ctx, next) => {
  console.log(2);
  await next()
  console.log(5);
}
// 中间件3
const m3 = async (ctx, next) => {
  console.log(3);
  await next()
  console.log(4);
}

// 应用级中间件
app.use(async (ctx, next) => {
  await next()
})

app.use(m1)
app.use(m2)
app.use(m3)

app.listen(3000)


//1
//2
//3
//4
//5
//6
// koa-compose 实现的
// 洋葱模型，先进后出，类似于数据结构中的执行栈