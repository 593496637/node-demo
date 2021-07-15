const { NAME_OR_PASSWORD_IS_REQUIRED } = require('../constants/error-types')
const verifyUser = async (ctx, next) => {
  // 1.获取用户名密码
  const { name, password } = ctx.request.body
  // 2.判断用户密码不为空
  if (!name || !password || name === '' || password === '') {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }


  await next()
}

module.exports = {
  verifyUser
}