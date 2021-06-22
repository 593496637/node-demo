const http = require('http')

// http发送get请求
// http.get('http://localhost:8000', res => {
//   res.on('data', data => {
//     console.log(data.toString());
//   })

//   res.on('end', () => {
//     console.log('get获取成功');
//   })
// })

const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8000
}, res => {
  res.on('data', data => {
    console.log(data.toString());
  })

  res.on('end', () => {
    console.log('post获取成功');
  })
})
req.end()