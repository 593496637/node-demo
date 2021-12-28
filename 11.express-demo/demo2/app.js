const express = require('express')
const app = express()
const swig = require('swig')
const mysql = require('mysql')

app.use(express.static('public'))
app.set('view engine', 'html')
app.engine('html', swig.renderFile)

// 设置MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

connection.connect();

app.get('/', function (req, res, next) {
  res.render('index', { title: '哈哈哈' })
})

app.get('/receive', function (req, res, next) {
  console.log(req.query);
  const post = {
    username: req.query.username
  }
  const query = connection.query('INSERT INTO userinfo SET ?', post, function (err, result) {
    if (err) {
      res.json({
        success: 'no',
        msg: '插入数据失败'
      })
    } else {
      res.json({
        success: 'ok',
        msg: '成功'
      })
    }
  })
})

// 容错机制
app.get('*', function (req, res, next) {
  res.status(404)
  res.end('404')
})

app.use(function (err, req, res, next) {
  res.status(500)
  res.end('error')
})

app.listen(3000, function () {
  console.log('server is running');
})

// http://localhost:3000  正常
// http://localhost:3000/test   异常