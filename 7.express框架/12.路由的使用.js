const express = require('express')
const userRouter = require('./routers/users')
const birds = require('./routers/birds')

const app = express()

app.use('/users', userRouter)
app.use('/birds', birds)

app.listen(8000, err => {
  console.log('服务已启动');
})