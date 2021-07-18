const Router = require('koa-router')
const { login } = require('../controller/auth.controller.js')
const { verifyLogin } = require('../middleware/auth.middleware')

const autoRouter = new Router()

autoRouter.post('/login', verifyLogin, login)

module.exports = autoRouter