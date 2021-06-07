const { promisify } = require('util')

const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')

const createProjectAction = async (project) => {
  console.log('正在clone：', vueRepo)
  // 1.clone 项目
  await download(vueRepo, project, { clone: true })
  console.log('finished')
  // 2.执行npm install
  console.log('开始install')
  await commandSpawn(
    process.platform === 'win32' ? 'npm.cmd' : 'npm',
    ['install'],
    { cwd: `./${project}` }
  )
  // 3.运行 npm run serve
  // 4.打开浏览器
}

module.exports = createProjectAction
