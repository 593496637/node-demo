const connection = require('../app/database')
class LabelService {
  async create(name) {
    const statement = `INSERT INTO label (name) VALUES (?);`
    const [result] = await connection.execute(statement, [name])
    return result
  }

  async isExistLabel(name) {
    const statement = `SELECT * FROM label WHERE name=?;`
    const [result] = await connection.execute(statement, [name])
    return result.length ? true : false
  }
}

module.exports = new LabelService()