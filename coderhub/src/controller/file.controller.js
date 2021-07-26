const { AVATAR_PATH } = require('../constants/file-path')
const fileService = require('../service/file.service')
const userService = require('../service/user.service')
class FileController {
  async saveAvatarInfo(ctx, next) {
    // 获取图像信息
    const { filename, mimetype, size } = ctx.req.file
    const { id } = ctx.user

    // 将图像信息存储到数据库中
    const result = await fileService.createAvatar(filename, mimetype, size, id)

    // 将图片地址保存在user表中
    const avatarUrl = `/users/${id}/avatar`
    await userService.updateAvatarUrlById(avatarUrl, id)


    ctx.body = {
      code: 0,
      msg: '成功'
    }

  }
}

module.exports = new FileController()