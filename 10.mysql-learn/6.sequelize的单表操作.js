const { Sequelize, DataTypes, model } = require('sequelize')

const sequelize = new Sequelize('lkk', 'root', 'likaikai123.',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)