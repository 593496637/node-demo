const Path = require('path');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const routes = require('./routes')

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public')
    }
  }

});

const init = async () => {

  // 静态文件
  await server.register(Inert);
  //  路由
  for (const route of routes) {
    server.route(route)
  }
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

// 全局错误捕捉
process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();