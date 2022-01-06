const shell = require('shelljs')
shell.exec('yarn --production')
shell.exec('pm2 start pm2.json')