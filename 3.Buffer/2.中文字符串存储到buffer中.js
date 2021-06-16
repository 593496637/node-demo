// 一个中文3个字节
const message = '你好啊'

// 1.utf-8编码
const buffer = Buffer.from(message,'utf-8')

console.log(buffer);
console.log(buffer.toString());

// 2.utf16le
const buffer16=Buffer.from(message,'utf16le')
console.log(buffer16);
console.log(buffer16.toString('utf16le'));