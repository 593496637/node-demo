const express = require('express')

const app = express()

// 路径和方法匹配中间件
app.use((req, res, next) => {
  console.log('common middleWare');
  next()
})

app.get('/home', (req, res, next) => {
  console.log('home path and method middleWare get');
  res.end('get')
})

app.post('/home', (req, res, next) => {
  console.log('login path and method middleWare post');
  res.end('post')
})


// get: localhost:8000/home
// 打印1、2

// post：localhost:8000/home
// 打印1、3




app.listen(8000, err => {
  console.log('服务已启动');
})