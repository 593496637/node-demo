/**
 * 执行终端命令相关代码
 */

const { spawn } = require('child_process')

const commandSpawn = (...args) => {
  return new Promise((resolve) => {
    const childProcess = spawn(...args)
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)

    // 执行完毕
    childProcess.on('close', () => {
      resolve()
    })
  })
}

module.exports = {
  commandSpawn,
}
