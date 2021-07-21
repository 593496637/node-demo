const jwt = require('jsonwebtoken')
const errorTypes = require('../constants/error-types')
const userService = require('../service/user.service')
const authService = require('../service/auth.service')
const md5Password = require('../utils/password-handle')
const { PUBLIC_KEY } = require('../app/config')


const verifyLogin = async (ctx, next) => {
  // 1.获取用户名密码
  const { name, password } = ctx.request.body
  // 2.判断用户密码是否为空
  if (!name || !password || name.trim() === '' || password.trim() === '') {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }
  // 3.判断用户是否存在
  const result = await userService.getUserByName(name)
  const user = result[0]
  if (!user) {
    const error = new Error(errorTypes.USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  // 4.判断密码是否和数据库中的密码一致(加密)
  if (md5Password(password) !== user.password) {
    const error = new Error(errorTypes.PASSWORD_IS_INCORRECT)
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
    const error = new Error(errorTypes.UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

// 权限验证 --
const verifyPermission = async (ctx, next) => {
  // 1.获取参数
  const [resourceKey] = Object.keys(ctx.params)
  const tableName = resourceKey.replace('Id', '')
  const resourceId = ctx.params[resourceKey]

  const { id } = ctx.user

  // 2.查询是否具备权限
  try {
    const isPermission = await authService.checkPermission(tableName, resourceId, id)
    if (!isPermission) throw new Error()
    await next()
  } catch (err) {
    const error = new Error(errorTypes.UNPERMISSION)
    return ctx.app.emit('error', error, ctx)
  }
}

// 权限验证 -- 另一个思路：封装到一个闭包，在router的中间件里调用
// const verifyPermission = (tableName) => {
//   return async (ctx, next) => {
//     // 1.获取参数
//     const { momentId } = ctx.params
//     const { id } = ctx.user

//     // 2.查询是否具备权限
//     try {
//       const isPermission = await authService.checkPermission(tableName, momentId, id)
//       if (!isPermission) throw new Error()
//       await next()
//     } catch (err) {
//       const error = new Error(errorTypes.UNPERMISSION)
//       return ctx.app.emit('error', error, ctx)
//     }
//   }
// }

module.exports = {
  verifyLogin,
  verifyAuth,
  verifyPermission
}