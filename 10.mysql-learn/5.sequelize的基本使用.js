const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lkk', 'root', 'likaikai123.', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate().then(res => {
  console.log('θΏζ₯ζε');
}).catch(err => {
  console.log(err);
})