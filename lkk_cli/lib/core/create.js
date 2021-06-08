const program = require('commander')

const { createProjectAction, addComponentAction } = require('./actions')

// 创建指令
const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)

  program
    .command('addcpn <name>')
    .description('add vue component,例如：lkk addcpn helloWorld -d src/components')
    .action((name) => {
      addComponentAction(name, 'src/components')
    })
}

module.exports = createCommands
