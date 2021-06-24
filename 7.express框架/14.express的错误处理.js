const express = require('express')

const app = express()

const USERNAME_DOES_NOT_EXISTS = "USERNAME_DOES_NOT_EXISTS"
const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS"

app.post('/login', (req, res, next) => {
  // 在数据中查询用户时，发现不存在
  const isLogin = false
  if (isLogin) {
    res.send({ message: '登录成功' })
  } else {
    // 未使用中间件
    // res.status(400)
    // res.send('username does not exists')
    // 使用中间件的方式
    next(new Error(USERNAME_DOES_NOT_EXISTS))
  }
})

app.post('/register', (req, res, next) => {
  // 注册时，发现已注册
  const isExists = true
  if (!isExists) {
    res.send('user register success')
  } else {
    next(new Error(USERNAME_ALREADY_EXISTS))
  }
})

// 错误捕捉中间件
app.use((err, req, res, next) => {
  console.log(err.message);
  let status = 400
  let message = ''

  switch (err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      message = 'username does not exists'
      break;
    case USERNAME_ALREADY_EXISTS:
      message = 'username already exists'
      break;
    default:
      message = 'not found'
      break;
  }

  res.status(status)
  res.send({
    errCode: status,
    errMessage: message
  })
})


app.listen(8000, err => {
  console.log('服务已启动');
})