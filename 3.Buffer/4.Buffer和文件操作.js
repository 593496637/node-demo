const fs = require('fs')
const sharp = require('sharp')

// 读取文本文件
fs.readFile('./file/foo.txt', (err, data) => {
  console.log(data);
  console.log(data.toString());
})

// 读取图片文件
fs.readFile('./file/bar.jpg', (err, data) => {
  if (err) console.log(err);
  fs.writeFile('./file/baz.jpg', data, err => { console.log(err); })
})

// sharp库的使用
sharp('./file/bar.jpg')
  .resize(200, 200)
  .toFile('./file/image.jpg')


sharp('./file/bar.jpg')
  .resize(300, 300)
  .toBuffer()
  .then(data => {
    // 先转换为buffer，然后通过fs的方式转换
    fs.writeFile('./file/image2.jpg', data, err => {
      console.log(err);
    })
  })