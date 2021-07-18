const Koa = require('koa')
const bodyParser = require('koa-bodyParser')
const errorHandler = require('./error-handle')
const useRoutes = require('../router')

const app = new Koa()


app.use(bodyParser())
useRoutes(app)

app.on('error', errorHandler)

module.exports = app