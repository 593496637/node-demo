const fs = require('fs')

// 传统的写入方式
// fs.writeFile('./bar.txt', "Hello World", { flag: 'a' }, err => {
//   if (err) console.log(err);
// })

// Stream 方式写入
const writer = fs.createWriteStream('./bar.txt', {
  flags: "a", //a 的时候start不生效
  start: 4,
  end:4
})

writer.write('你好啊', err => {
  if (err) console.log(err);
  console.log('成功');
})

// writer.close()

// 1.write
// 2.close
writer.end('暗咖啡')

writer.on('close', () => {
  console.log('文件关闭');
})
