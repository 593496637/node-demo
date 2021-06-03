const program = require('commander')

const helpOptions = () => {
  // 增加自己的options
  program.option('-l --lkk', 'a lkk cli')
  program.option('-d --dest <dest>', 'a destination folder,例如：-d /src/components')


  // 监听事件
  program.on('--help', function () {
    console.log('');
    console.log('Other:');
    console.log(' other options');
  })

}
module.exports = helpOptions