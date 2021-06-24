const express = require('express')


// express其实是一个函数：createApplication
// 创建服务器
const app = express()

// 监听默认路径
app.get('/', (req, res, next) => {
  res.end('hello express')
})

app.post('/', (req, res, next) => {
  res.end('hello post express')
})

app.post('/login', (req, res, next) => {
  res.end('welcome back')
})

app.listen(8000, err => {
  console.log('服务已启动');
})