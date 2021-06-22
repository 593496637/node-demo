const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {

  // 设置状态码
  // 方式一：直接给属性赋值
  // res.statusCode = 401

  // 方式二：和head一起设置
  res.writeHead(400)

  // 响应结果
  res.write('哈哈哈')
  res.end('hello world')
})

// 启动服务器，并且指定端口号和主机
server.listen(8000, '0.0.0.0', () => {
  console.log('服务器已启动')
})
