const { NAME_OR_PASSWORD_IS_REQUIRED, USER_ALREADY_EXISTS } = require('../constants/error-types')
const service = require('../service/user.service')
const verifyUser = async (ctx, next) => {
  // 1.获取用户名密码
  const { name, password } = ctx.request.body
  // 2.判断用户密码不为空
  if (!name || !password || name.trim() === '' || password.trim() === '') {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户是否被注册
  const result = await service.getUserByName(name)
  console.log(result);
  if (result.length) {
    const error = new Error(USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

module.exports = {
  verifyUser
}