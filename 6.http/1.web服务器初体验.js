const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  res.end('hello world')
})

// 启动服务器，并且指定端口号和主机
server.listen(8000, '0.0.0.0', () => {
  console.log('服务器已启动')
})

// http.createServer 本质上是等于 new http.Server
// 二者用任意一个都可以
const server2 = new http.Server((req, res) => {
  res.end('hello world2')
})

// 127.0.0.1  回环地址 会被解析成本身，无法通过IP访问
// localhost  会被解析成127.0.0.1
// 0.0.0.0  会被解析成所有方式

server2.listen(8001, '0.0.0.0', () => {
  console.log(server2.address())
  console.log('服务器2已启动')
})
