const express = require('express')

const app = express()

// params方式
app.get('/getUser/:id', (req, res, next) => {
  console.log(req.params);
  res.end('获取用户信息')
})


// query方式
app.get('/login', (req, res, next) => {
  console.log(req.query);
  res.end('登录')
})


app.listen(8000, () => {
  console.log('服务已启动')
})