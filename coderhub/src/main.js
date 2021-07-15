const app = require('./app')
require('./app/database')

const { APP_PORT } = require('./app/config')


app.listen(8000, () => {
  console.log(`服务已启动 端口：${APP_PORT}`);
})