const Router = require('koa-router')
const { create } = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')

const userRouter = new Router()

userRouter.post('/users', verifyUser, handlePassword, create)

module.exports = userRouter