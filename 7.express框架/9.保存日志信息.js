const express = require('express')
const fs = require('fs')
const path = require('path')
const morgan = require('morgan')

const app = express()

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', (req, res, next) => {
  console.log('请求成功');
  res.end('hello world')
})



app.listen(8000, () => {
  console.log('服务已启动');
})