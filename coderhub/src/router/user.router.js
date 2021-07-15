const Router = require('koa-router')
const { create } = require('../controller/user.controller')
const { verifyUser } = require('../middleware/user.middleware')


const userRouter = new Router()
userRouter.post('/users', verifyUser, create)

module.exports = userRouter