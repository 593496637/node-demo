// 按行读取
const fs = require('fs')
const path = require('path')

const readLine = require('readline')
const fileName = path.resolve(__dirname, 'test.txt')

const readStream = fs.createReadStream(fileName)

// 统计数量
let num = 0

// 创建readline 对象
const read = readLine.createInterface({
  // 输入
  input: readStream
})

read.on('line', data => {
  if (data.includes('浪费')) {
    num++
  }
  console.log(data);
})

read.on('close', () => {
  console.log('读取完成', num);
})
