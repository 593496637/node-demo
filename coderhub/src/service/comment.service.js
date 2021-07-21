const connection = require('../app/database')


class CommentService {
  // 评论
  async create(momentId, content, userId) {
    const statement = `INSERT INTO comment(moment_id,content,user_id) VALUES (?,?,?);`
    const [result] = await connection.execute(statement, [momentId, content, userId])
    return result
  }

  // 回复评论
  async reply(momentId, content, userId, commentId) {
    const statement = `INSERT INTO comment(moment_id,content,user_id,comment_id) VALUES (?,?,?,?);`
    const [result] = await connection.execute(statement, [momentId, content, userId, commentId])
    return result
  }

  // 修改评论
  async update(content, commentId) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?`
    const [result] = await connection.execute(statement, [content, commentId])
    return result
  }

  async remove(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?;`;
    const [result] = await connection.execute(statement, [commentId])
    return result
  }

  async getCommentsByMomentId(momentId) {
    const statement = `SELECT * FROM comment WHERE moment_id=?;`
    const [result] = await connection.execute(statement, [momentId])
    return result
  }
}

module.exports = new CommentService()