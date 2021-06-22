const http = require('http')
const { URL, URLSearchParams } = require('url')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  if (pathname === '/login') {
    if (req.method === 'POST') {
      // 拿到body中的数据
      
      req.setEncoding('utf-8')
      req.on('data', (data) => {
        const { username, password } = JSON.parse(data)
        console.log(username, password)
      })

      res.end('登录')
    } else {
      res.end(req.method)
    }
  }
})
// 启动服务器，并且指定端口号和主机
server.listen(8000, '0.0.0.0', () => {
  console.log('服务器已启动')
})

//请求：http://localhost:8000/login
// {
//   "username":"admin",
//   "password":1212
// }
// 填写上方参数 body>json
