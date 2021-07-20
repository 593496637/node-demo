const jwt = require('jsonwebtoken')
const { NAME_OR_PASSWORD_IS_REQUIRED, USER_DOES_NOT_EXISTS, PASSWORD_IS_INCORRECT, UNAUTHORIZATION } = require('../constants/error-types')
const service = require('../service/user.service')
const md5Password = require('../utils/password-handle')
const { PUBLIC_KEY } = require('../app/config')


const verifyLogin = async (ctx, next) => {
  // 1.获取用户名密码
  const { name, password } = ctx.request.body
  // 2.判断用户密码是否为空
  if (!name || !password || name.trim() === '' || password.trim() === '') {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }
  // 3.判断用户是否存在
  const result = await service.getUserByName(name)
  const user = result[0]
  if (!user) {
    const error = new Error(USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  // 4.判断密码是否和数据库中的密码一致(加密)
  if (md5Password(password) !== user.password) {
    const error = new Error(PASSWORD_IS_INCORRECT)
    return ctx.app.emit('error', error, ctx)
  }

  ctx.user = user
  await next()
}

// 授权验证
const verifyAuth = async (ctx, next) => {
  try {
    // 1.获取token
    const authorization = ctx.headers.authorization
    const token = authorization.replace('Bearer ', '')
    // 2.验证token
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256']
    })
    ctx.user = result
    await next()
  } catch (err) {
    console.log(err);
    const error = new Error(UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}


module.exports = {
  verifyLogin,
  verifyAuth
}