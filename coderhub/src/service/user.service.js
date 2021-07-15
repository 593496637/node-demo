const connection = require('../app/database')

class UserService {
  async create(user) {
    const { name, password } = user;
    const statement = `INSERT INTO users (name,password) VALUES (?,?)`

    const result = await connection.execute(statement, [name, password])
    // 将user存储到数据库中
    return result
  }
}

module.exports = new UserService()