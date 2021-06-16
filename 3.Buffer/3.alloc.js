// 通过alloc的方式创建Buffer
const buffer = Buffer.alloc(8)
console.log(buffer);

buffer[0] = 88
//<Buffer 58 00 00 00 00 00 00 00>
// 10进制转换为16进制变成了58
console.log(buffer);

// 0x88 16进制
buffer[1] = 0x88
console.log(buffer);