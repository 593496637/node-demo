const express = require('express')
const app = express()
const cb0 = function (req, res, next) {
  console.log('cb0');
  next()
}

const cb1 = function (req, res, next) {
  console.log('cb1');
  next()
}

const cb2 = function (req, res, next) {
  console.log('cb2');
  res.send('hello express')
}


app.get('/*', function (req, res, next) {
  console.log('必经路由');
  next()
})
app.get('/', (req, res, next) => {
  res.send('首页')
})
app.get('/example/c', [cb0, cb1, cb2])

app.listen(8080, function () {
  console.log('接口已启动');
})