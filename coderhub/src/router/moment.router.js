const Router = require('koa-router')

const momentRouter = new Router({ prefix: '/moment' })

const { create, list, detail, update, remove, addLabels } = require('../controller/moment.controller.js')
const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware')
const { verifyLabelExists } = require('../middleware/label.middleware')
momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)

momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)
momentRouter.post('/:momentId/labels', verifyAuth, verifyPermission,verifyLabelExists, addLabels)

module.exports = momentRouter