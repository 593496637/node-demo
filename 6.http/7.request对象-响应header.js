const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {

  // 设置响应header
  // res.setHeader("Content-type", 'text/plain;charset=utf-8')

  // text/html 渲染页面
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
  })

  // 响应结果
  res.write('狂欢节爱国')
  res.end('<h1>hello world</h1>')
})

// 启动服务器，并且指定端口号和主机
server.listen(8000, '0.0.0.0', () => {
  console.log('服务器已启动')
})
