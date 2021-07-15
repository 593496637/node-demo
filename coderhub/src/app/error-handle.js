const { message } = require('statuses');
const errorTypes = require('../constants/error-types')
const errorHandler = (error, ctx) => {
  console.log('错误：', error.message);

  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 404
      message = '用户名密码不能为空'
      break;

    default:
      status = 404
      break;
  }

  ctx.status = 404
  ctx.body = '错误'
}

module.exports = errorHandler