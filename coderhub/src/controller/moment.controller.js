const fs = require('fs')
const { PICTURE_PATH } = require('../constants/file-path')
const momentService = require('../service/moment.service')
const fileService = require('../service/file.service')
class MomentController {
  async create(ctx, next) {
    // 1.获取数据(user_id,content,图片)
    const userId = ctx.user.id
    const content = ctx.request.body.content
    // 将数据插入数据库
    const result = await momentService.create(userId, content)
    ctx.body = result
  }

  // 动态列表
  async list(ctx, next) {
    // 获取数据(offset/size)
    const { offset, size } = ctx.query
    // 查询列表
    const result = await momentService.getMomentList(offset, size)
    ctx.body = result
  }

  // 动态详情
  async detail(ctx, next) {
    // 获取数据(momentId)
    const momentId = ctx.params.momentId

    // 根据id查询数据
    const result = await momentService.getMomentById(momentId)

    ctx.body = result
  }

  // 修改
  async update(ctx, next) {
    // 1.获取参数
    const { momentId } = ctx.params
    const { content } = ctx.request.body

    // 2.修改moment
    const result = await momentService.update(content, momentId)

    ctx.body = result
  }

  // 删除
  async remove(ctx, next) {
    const { momentId } = ctx.params
    const result = await momentService.remove(momentId)
    ctx.body = result
  }

  // 添加标签
  async addLabels(ctx, next) {
    // 1.获取标签和动态id
    const { labels } = ctx
    const { momentId } = ctx.params

    // 2.添加所有的标签
    for (const label of labels) {
      // 判断标签是否已经和动态绑定
      const isExist = await momentService.hasLabel(momentId, label.id)
      if (!isExist) {
        await momentService.addLabel(momentId, label.id)
      }
    }

    ctx.body = '添加标签成功'
  }

  async fileInfo(ctx, next) {
    let { filename } = ctx.params
    const { type } = ctx.query

    const fileInfo = await fileService.getFileByFilename(filename)
    const types = ['large', 'middle', 'small']
    if (types.some(item => item === type)) {
      filename = filename + '-' + type
    }
    ctx.response.set('content-type', fileInfo.mimetype)
    ctx.body = fs.createReadStream(`${PICTURE_PATH}/${filename}`)

  }
}

module.exports = new MomentController()