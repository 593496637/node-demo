const program = require('commander')

const { createProjectAction, addComponentAction, addPageAndRoute, addStoreAction } = require('./actions')

// 创建指令
const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)

  program
    .command('addcpn <name>')
    .description(
      'add vue component,例如：lkk addcpn helloWorld -d src/components'
    )
    .action((name) => {
      addComponentAction(name, program.opts().dest || 'src/components')
    })

  program
    .command('addpage <page>')
    .description('add vue page and router config,例如：lkk addpage Home [-d src/pages]')
    .action((page) => {
      addPageAndRoute(page, program.opts().dest || 'src/pages')
    })

  program.command('addstore <store>')
    .description('add vue store，例如：lkk addstore store')
    .action((store) => {
      addStoreAction(store, program.opts().dest || 'src/store/modules')
    })
}

module.exports = createCommands
