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
}

module.exports = new LabelController()