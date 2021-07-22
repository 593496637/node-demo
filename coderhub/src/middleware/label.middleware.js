const service = require("../service/label.service")

const verifyLabelExists = async (ctx, name) => {
  // 取出要添加的所有的标签
  const { labels } = ctx.request.body
  // 遍历每一个标签在label表中是否存在
  for (const name of labels) {
    const isExistLabel = await service.isExistLabel(name)
    if (!isExistLabel) {
      const result = await service.create()
    }
  }
  await next()
}

module.exports = { verifyLabelExists }