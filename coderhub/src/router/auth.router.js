const Router = require('koa-router')

const autoRouter = new Router()
const { login } = require('../controller/auth.controller.js')


autoRouter.post('/login', login)

module.exports = autoRouter