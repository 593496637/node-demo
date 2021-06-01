const fs = require('fs')
const path = require('path')

// 1.创建文件夹
const dirname = './kk'
if (!fs.existsSync(dirname)) {
  console.log('不存在');
  fs.mkdir(dirname, (err, files) => {
    if (err) throw err
    console.log(files);
  })
}



// 2.递归读取文件
const dirname2 = './test'
function getFiles(dirname) {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    for (let file of files) {
      if (file.isDirectory()) {
        const filepath = path.resolve(dirname2, file.name)
        getFiles(filepath)
      } else {
        console.log(file.name);
      }
    }
  })
}

getFiles(dirname2)


// 3.重命名
fs.rename('./abc', './name', err => {
  console.log(err);
})