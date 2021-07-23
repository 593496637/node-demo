const service = require('../service/label.service')

class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body
    try {
      const result = await service.create(name)
      ctx.body = result
    } catch (error) {
      ctx.body = error
    }
  }

  async list(ctx, next) {
    const { page_num, page_size } = ctx.query
    const result = await service.getLabels(page_num, page_size)
    ctx.body = result
  }
}

module.exports = new LabelController()