const Multer = require('koa-multer')

const avatarUpload = Multer({ dest: './uploads' })
const avatarHandler = avatarUpload.single('avatar')

module.exports = {
  avatarHandler
}