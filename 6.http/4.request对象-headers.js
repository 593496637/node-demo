const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  console.log(req.headers)
  res.end('hello world')
})

// 启动服务器，并且指定端口号和主机
server.listen(8000, '0.0.0.0', () => {
  console.log('服务器已启动')
})
