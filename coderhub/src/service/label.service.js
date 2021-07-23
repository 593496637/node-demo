const connection = require('../app/database')
class LabelService {
  async create(name) {
    const statement = `INSERT INTO label (name) VALUES (?);`
    const [result] = await connection.execute(statement, [name])
    return result
  }

  async getLabelByName(name) {
    const statement = `SELECT * FROM label WHERE name=?;`
    const [result] = await connection.execute(statement, [name])
    return result[0]
  }

  async getLabels(page_num = 1, page_size = 10) {
    const statement = `SELECT * FROM label LIMIT ?,?`
    const params = [String((+page_num - 1) * page_size), String(page_size)]
    const [result] = await connection.execute(statement, params)
    return result
  }
}

module.exports = new LabelService()