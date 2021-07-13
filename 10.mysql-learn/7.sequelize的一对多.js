const { Sequelize, DataTypes, Model, Op } = require('sequelize')

const sequelize = new Sequelize('lkk', 'root', 'likaikai123.',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

// 品牌
class Brand extends Model { }
Brand.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  website: DataTypes.STRING,
  phoneRank: DataTypes.INTEGER
}, {
  tableName: 'brand',
  createdAt: false,
  updatedAt: false,
  sequelize
})

// 商品
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
  score: DataTypes.DOUBLE,
  brandId: {
    field: 'brand_id',
    type: DataTypes.INTEGER,
    references: {
      model: Brand,
      key: 'id'
    },
  }
}, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
})




// 将两张表联系在一起
Product.belongsTo(Brand, {
  foreignKey: 'brandId'
})

async function queryProducts() {
  const result = await Product.findAll({
    include: {
      model: Brand
    },
    where: {
      [Op.not]: [{
        brandId: null
      }]
    }
  })

  console.log(result);
}
queryProducts()