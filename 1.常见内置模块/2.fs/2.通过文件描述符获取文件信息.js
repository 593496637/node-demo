const fs = require('fs')
fs.open('./abc.txt', (err, fd) => {
  if (err) {
    throw err
  }

  // 通过描述符获取文件信息
  fs.fstat(fd, (err, stats) => {
    if (err) {
      throw err
    }
    console.log(stats);
  })
})
