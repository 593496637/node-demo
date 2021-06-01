const path = require('path')

const basePath = 'user/kk'
const filename = 'abc.txt'

// 路径拼接
const filePath = path.resolve(basePath, filename)
const filePath2 = path.join(basePath, filename)
console.log(filePath)
console.log(filePath2)

// __dirname  当前目录
console.log(__dirname)
// 当前文件的路径
console.log(__filename);