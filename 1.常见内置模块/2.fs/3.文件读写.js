const fs = require('fs')

const content = '三生三世十里桃花'
fs.writeFile('a.txt', content, {
  flag: 'as'
}, err => {
  if (err) throw err
  console.log('写入成功');
})


fs.readFile('a.txt', { encoding: 'utf-8' }, (err, content) => {
  console.log(content);
})