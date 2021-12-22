const fs = require('fs')

// 同步读取
// const data = fs.readFileSync('data.txt', { encoding: 'utf8' })
// console.log(data);
// 异步读取
// fs.readFile('data.txt', { encoding: 'utf8' }, (err, data) => {
//   console.log(data);
// })

// 同步写入
// fs.writeFileSync('data.txt','写入的文件')
// 异步写入
// fs.writeFile('data.txt', '写入的内容', { encoding: 'utf8' }, err => {

// })

// 同步追加
// fs.appendFileSync('data.txt', '追加的内容')
// 异步追加
// fs.appendFile('data.txt', '追加的内容', err => { })

// 同步拷贝
// fs.copyFileSync('data.txt', 'dataCopy.txt')
// 异步拷贝
// fs.copyFile('data.txt', 'dataCopy.txt', () => { })

// 模拟同步拷贝文件
// function copy(file, target) {
//   const data = fs.readFileSync(file)
//   fs.writeFileSync(target, data)
// }
// copy('a.txt', 'data.txt')

// 异步打开文件  r:可读权限 fd:文件描述符 描述符是递增的
// fs.open('data.txt', 'r', (err, fd) => {
//   console.log(fd);  //3
//   fs.open('data1.txt', 'r', (err, fd) => {
//     console.log(fd);  //4
//   })
// })

// 异步关闭
// fs.open('data.txt', 'r', (err, fd) => {
//   fs.close(fd, err => {
//     console.log('关闭成功');
//   })
// })

// fs.readFile() 大小未知的情况下不建议使用，容易造成崩溃和数据丢失
// 推荐使用fs.read() 读取到buffer中
// 6个参数
// 需要用open打开，拿到标识符
// 创建一块内存大小
// const buffer = Buffer.alloc(6) //byte

// fs.open('data.txt', 'r', (err, fd) => {
//   // 文件描述符、读取到的buffer、向buffer写入的初始位置、读取长度、读取初始位置、 回调函数(错误回调，实际读取的大小，缓存对象)
//   fs.read(fd, buffer, 0, 6, 0, (err, bytesRead, buffer) => {
//     console.log(bytesRead);
//     console.log(buffer.toString());
//   })
// })

// write 与 read类似，可以分段写入
// 6个参数
// 存入buffer
// const buffer = Buffer.from('尽快看看')
// fs.open('data1.txt', 'r+', (err, fd) => {
//   fs.write(fd, buffer, 3, 6, 3, (err, size) => {
//     fs.close(fd, err => {
//       console.log('关闭文件');
//     })
//   })
// })


// 同步查看
fs.accessSync('./')