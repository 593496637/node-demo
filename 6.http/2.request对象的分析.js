const http = require('http')
const { URL, URLSearchParams } = require('url')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  const myURL = new URL(req.url, `http://${req.headers.host}`)
  console.log(myURL)

  const { pathname, searchParams } = myURL

  if (pathname === '/login') {
    const username = searchParams.get('username')
    const password = searchParams.get('password')
    console.log(username, password)
    res.end('登录')
  } else if (pathname === '/users') {
    res.end('用户中心')
  } else {
    res.end('错误了')
  }
})
// 启动服务器，并且指定端口号和主机
server.listen(8000, '0.0.0.0', () => {
  console.log('服务器已启动')
})

//请求： http://localhost:8000/login?username=admin&password=123456
