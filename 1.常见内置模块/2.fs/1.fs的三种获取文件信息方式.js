const fs = require('fs')

const filepath = './abc.txt'
// 获取文件的状态信息 stat
// 1.同步读取
const info = fs.statSync(filepath)
console.log(info);

// 2.异步读取
fs.stat(filepath, (err, info) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(info);
})
console.log('2.异步读取');


// 3.异步读取 promise 方式
fs.promises.stat(filepath).then(info => {
  console.log(info);
}).catch(err => {
  console.log(err);
})
console.log('3.异步读取promise');