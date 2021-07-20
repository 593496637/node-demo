const Router = require('koa-router')
const { login, success } = require('../controller/auth.controller.js')
const { verifyLogin, verifyAuth } = require('../middleware/auth.middleware')

const autoRouter = new Router()

autoRouter.post('/login', verifyLogin, login)
autoRouter.get('/test', verifyAuth, success)


module.exports = autoRouter