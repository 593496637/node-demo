const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    if (req.method === 'POST') {
      const fileWriter = fs.createWriteStream('./foo1.png', { flags: 'a+' })


      // 无法解析生成的图片
      // req.pipe(fileWriter)
      req.on('data', data => {
        console.log(data);
        fileWriter.write(data)
      })

      req.on('end', () => {
        console.log('文件上传成功');
        res.end('文件上传成功')
      })
    }
  }
})

server.listen(8000, '0.0.0.0', () => {
  console.log('服务器已启动');
})