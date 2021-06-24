const express = require('express')

const app = express()

// 编写普通中间件
// use注册一个中间件
// 注册多个一样的中间件，只对第一个中间件作相应
// 加入next() 就会继续往下执行
app.use((req, res, next) => {
  console.log('注册了第一个普通中间件');
  next()
})
app.use((req, res, next) => {
  console.log('注册了第一个普通中间件2');
  next()
})
app.use((req, res, next) => {
  console.log('注册了第一个普通中间件3');
  res.end('第三个')
})




app.listen(8000, () => {
  console.log('中间件服务器启动成功');
})