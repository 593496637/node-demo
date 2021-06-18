const fs = require('fs')

// 传统思路
// fs.readFile('./bar.txt', (err, data) => {
//   fs.writeFile('./baz.txt', data, err => {
//     if (err) {
//       console.log(err);
//       return
//     }
//     console.log('写入成功');
//   })
// })


// Stream写法
const reader = fs.createReadStream('./bar.txt')
const writer = fs.createWriteStream('./foo.txt')

reader.pipe(writer)
writer.close()