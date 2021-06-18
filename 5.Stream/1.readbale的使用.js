const fs = require('fs')

// fs.readFile('./text.txt', (err, data) => {
//   console.log(data);
// })

// highWaterMark 每次读取的字节数
const reader = fs.createReadStream('./text.txt', { start: 3, end: 6, highWaterMark: 1 })

reader.on('data', data => {
  console.log(data);

  // 暂停
  reader.pause()
  // 一秒重新开始
  setTimeout(() => {
    reader.resume()
  }, 1000);
})

reader.on('open', () => {
  console.log('文件被打开');
})

reader.on('close', () => {
  console.log('文件被关闭');
})
