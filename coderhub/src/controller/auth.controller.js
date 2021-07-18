class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body
    ctx.body = {
      code: 0,
      message: `登录成功,欢迎${name}回来`
    }
  }
}

module.exports = new AuthController()