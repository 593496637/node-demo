const express = require('express')

const app = express()
app.use((req, res, next) => {
  console.log('默认');
  next()
})

app.get('/home', (req, res, next) => {
  console.log('中间件1');
  next()
}, (req, res, next) => {
  console.log('中间件2');
  next()
}, (req, res, next) => {
  console.log('中间件3');
  next()
}, (req, res, next) => {
  console.log('中间件4');
  res.end('home')
})


app.listen(8000, err => {
  console.log('服务已启动');
})