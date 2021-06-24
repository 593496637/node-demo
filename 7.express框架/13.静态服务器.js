const express = require('express')

const app = express()

app.use(express.static('./build'))


app.listen(8000, err => {
  console.log('服务已启动');
})