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
  // 设置响应结果
  // 设置状态吗
  res.status(200)
  // 1.麻烦点点方式
  // res.type('application/json')
  // res.end(JSON.stringify({ abc: '123', def: '哈佛' }))

  // 2.通常使用点方式
  res.json({a:'阿里苦涩',b:'拉风'})
})


app.listen(8000, () => {
  console.log('服务已启动')
})