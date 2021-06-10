const path = require('path')

const { promisify } = require('util')
const open = require('open')

const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')

const { compile, writeToFile, createDirSync } = require('../utils/utils')

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
  // 1.编译ejs模板
  let result = await compile('vue-component.ejs', {
    name,
    lowerName: name.toLowerCase(),
  })

  const targetPath = path.resolve(dest, `${name}.vue`)
  // 2.放到对应的文件夹中
  writeToFile(targetPath, result)
}

// 3.添加组件和路由
const addPageAndRoute = async (name, dest) => {
  //1. 编译ejs模板
  const data = { name, lowerName: name.toLowerCase() }
  const pageResult = await compile('vue-component.ejs', data)
  const routeResult = await compile('vue-router.ejs', data)

  // 写入文件
  if (createDirSync(dest)) {
    const targetPagePath = path.resolve(dest, `${name}.vue`)
    const targetRoutePath = path.resolve(dest, `router.js`)

    writeToFile(targetPagePath, pageResult)
    writeToFile(targetRoutePath, routeResult)
  }
}

// 添加store
const addStoreAction = async (name, dest) => {
  //1. 编译ejs模板
  const storeResult = await compile('vue-store.ejs', {})
  const typesResult = await compile('vue-types.ejs', {})

  // 写入文件
  const targetDest = path.resolve(dest, name.toLowerCase())
  if (createDirSync(targetDest)) {
    const targetStorePath = path.resolve(targetDest, `${name}.js`)
    const targetTypesPath = path.resolve(targetDest, `types.js`)

    writeToFile(targetStorePath, storeResult)
    writeToFile(targetTypesPath, typesResult)
  }
}


module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAndRoute,
  addStoreAction
}
