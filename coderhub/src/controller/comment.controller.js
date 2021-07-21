const service = require('../service/comment.service.js')

class commentController {
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body
    const { id } = ctx.user

    const result = await service.create(momentId, content, id)

    ctx.body = result
  }

  async reply(ctx, next) {
    const { momentId, content } = ctx.request.body
    const commentId = ctx.params.commentId
    const { id } = ctx.user
    const result = await service.reply(momentId, content, id, commentId)
    ctx.body = result
  }

  async update(ctx, next) {
    const { commentId } = ctx.params
    const { content } = ctx.request.body
    const result = await service.update(content, commentId)
    ctx.body = result
  }

  async remove(ctx, next) {
    const { commentId } = ctx.params
    const result = await service.remove(commentId)
    ctx.body = result
  }

  async list(ctx, next) {
    const { momentId } = ctx.query
    console.log(momentId);
    const result = await service.getCommentsByMomentId(momentId)
    return result
  }

}

module.exports = new commentController()