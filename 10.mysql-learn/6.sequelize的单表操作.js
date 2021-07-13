const { Sequelize, DataTypes, Model, Op } = require('sequelize')

const sequelize = new Sequelize('lkk', 'root', 'likaikai123.',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

class Product extends Model { }
Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: DataTypes.DOUBLE,
  score: DataTypes.DOUBLE
}, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
})

async function queryProducts() {
  // 查询数据库中products表中的所有内容
  // const result = await Product.findAll({
  //   where: {
  //     price: {
  //       [Op.gte]: 9800
  //     }
  //   }
  // })
  // console.log(result);

  // 插入数据
  // const result2 = await Product.create({
  //   title: '苹果11',
  //   price: 9000,
  //   score: 7.4
  // })
  // console.log(result2);

  // 更新数据
  const result3 = await Product.update({
    price: 1001
  }, {
    where: {
      id: 1
    }
  })
}
queryProducts()