const path = require('path')
const fs = require('fs')

const ejs = require('ejs')

// 编译
const compile = (templateName, data) => {
  const templatePosition = `../template/${templateName}`
  const templatePath = path.resolve(__dirname, templatePosition)

  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if (err) {
        console.log(err);
        reject(err)
        return
      }
      resolve(result)
    })
  })
}

// 写入文件
const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content)
}

module.exports = {
  compile,
  writeToFile
}