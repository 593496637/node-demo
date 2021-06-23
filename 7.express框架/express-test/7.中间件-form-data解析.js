const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const upload = multer()
app.use(upload.any())

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('登录成功')
})



app.listen(8000, err => {
  console.log('服务已启动');
})