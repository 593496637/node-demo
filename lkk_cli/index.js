#!/usr/bin/env node

const program = require('commander')
const helpOptions = require('./lib/core/help')
const createCommands=require('')
// 查看版本号
program.version(require('./package.json').version, '-v,-V,--version')

// 帮助和可选信息
helpOptions()

// 解析
program.parse(process.argv)
