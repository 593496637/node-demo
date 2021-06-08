const path = require('path')

const { promisify } = require('util')
const open = require('open')

const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')

const { compile, writeToFile } = require('../utils/utils')

const createProjectAction = async (project) => {
  console.log('正在clone：', vueRepo)
  // 1.clone 项目
  await download(vueRepo, project, { clone: true })
  console.log('finished')

  // 2.执行npm install
  console.log('开始install')
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3.运行 npm run serve
  // 开始运行
  commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })

  // 4.打开浏览器
  open('http://localhost:8080')
}

// 添加组件的action
const addComponentAction = async (name, dest) => {
  // 2.编译ejs模板
  let result = await compile('vue-component.ejs', {
    name,
    lowerName: name.toLowerCase(),
  })

  // 3.将result写入到.vue文件中
  const targetPath = path.resolve(dest, `${name}.vue`)
  console.log(targetPath)
  writeToFile(targetPath, result)

  // 4.放到对应的文件夹中
}

module.exports = {
  createProjectAction,
  addComponentAction,
}
