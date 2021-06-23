const express = require('express')
const path = require('path')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname)
    console.log(uniqueSuffix);
    cb(null, uniqueSuffix)
  }
})

const upload = multer({ storage: storage })


app.post('/upload', upload.single('avatar'), (req, res, next) => {
  console.log(req);
  res.end('文件上传成功')
})

app.post('/uploads', upload.array('avatar', 12), (req, res, next) => {
  res.end('多文件上传成功')
})


app.listen(8000, err => {
  console.log('服务已启动');
})