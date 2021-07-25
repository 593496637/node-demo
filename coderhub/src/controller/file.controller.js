class FileController {
  async saveAvatarInfo(ctx, next) {
    // 获取图像信息
    // const { } = ctx.req.file
    console.log(ctx.req.file);
  }
}

module.exports = new FileController()