const express = require('express')

const app = express()


// 手动写的解析方式
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', data => {
//       const info = JSON.parse(data.toString())
//       req.body = info
//     })

//     req.on('end', () => {
//       next()
//     })
//   } else {
//     next()
//   }
// })


// body-parser:express3.x 内置在express框架
// body-parser:express4.x 分离了出去
// body-parser类似功能:express4.16.x 内置成函数

app.use(express.json())
// extended
// true：对urlencoded解析时，它使用的是第三方库：qs
// false：对URL恩code的解析时，使用的是node内置模块：querystring

// Form-encoded
app.use(express.urlencoded({ extended: true }))
// Json
app.use(express.raw())
// text
app.use(express.text())

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('login')
})

app.post('/products', (req, res, next) => {
  console.log(req.body);
  res.end('products')
})


app.listen(8000, err => {
  console.log('服务已启动');
})