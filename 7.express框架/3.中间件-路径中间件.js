const express = require('express')
const app = express()


// 路径匹配中间件

app.use((req, res, next) => {
  console.log('common middleWare 01');
  next()
})

app.use('/home', (req, res, next) => {
  console.log('home middleWare 01');
  next()
})

app.use((req, res, next) => {
  console.log('common middleWare 02');
  next()
})

app.use('/home', (req, res, next) => {
  console.log('home middleWare 02');
  res.end('哈哈哈')
})



app.listen(8000, () => {
  console.log('服务启动');
})