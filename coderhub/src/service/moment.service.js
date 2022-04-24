const connection = require('../app/database')

// const sqlFragment = `
//   SELECT 
//     m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
//   JSON_OBJECT('id',u.id,'name',u.name) user
//   FROM moment m
//   LEFT JOIN user u ON m.user_id = u.id  
// `

class MomentService {
  // 创建动态
  async create(userId, content) {
    const statement = `INSERT INTO moment (content,user_id) VALUES (?,?);`
    const [result] = await connection.execute(statement, [content, userId])
    return result
  }

  // 动态列表
  async getMomentList(offset = "0", size = "10") {
    const statement = `
      SELECT 
        m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name) user,
        (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id) commentCount,
        (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) labelCount
      FROM moment m
      LEFT JOIN user u ON m.user_id = u.id  
      LIMIT ?,?;`
    const [result] = await connection.execute(statement, [offset, size])
    return result
  }

  // 动态详情 -带评论
  async getMomentById(id) {
    const statement = `
    SELECT 
      m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
      IF(COUNT(u.id),JSON_OBJECT('id',u.id,'name',u.name,'avatarUrl',u.avatar_url),JSON_ARRAY()) author,
      IF(COUNT(l.id),JSON_ARRAYAGG(JSON_OBJECT('id',l.id,'name',l.name,'time',DATE_FORMAT(l.createAT,'%Y-%c-%d %H:%i:%s'))) ,JSON_ARRAY()) labels,
      (SELECT IF(COUNT(c.id),JSON_ARRAYAGG(
        JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',DATE_FORMAT(c.createAt,'%Y-%c-%d %H:%i:%s'),
                    'user',JSON_OBJECT('id',cu.id,'name',cu.name,'avatarUrl',u.avatar_url))
        ),JSON_ARRAY()) FROM comment c
                        LEFT JOIN user cu ON c.user_id = cu.id
                        WHERE m.id = c.moment_id) comments,
      (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:8000/moment/images/',file.filename)) FROM file WHERE m.id = file.moment_id) images
    FROM moment m
    LEFT JOIN user u ON m.user_id = u.id  

    LEFT JOIN moment_label ml ON m.id = ml.moment_id
    LEFT JOIN label l ON l.id = ml.label_id
    WHERE m.id = ?
    GROUP BY m.id;`
    try {
      const [result] = await connection.execute(statement, [id])
      return result[0]
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async update(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`
    const [result] = await connection.execute(statement, [content, momentId])
    return result
  }

  async remove(momentId) {
    const statement = `DELETE FROM moment WHERE id=?;`
    const [result] = await connection.execute(statement, [momentId])
    return result
  }

  async hasLabel(momentId, labelId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?`
    const [result] = await connection.execute(statement, [momentId, labelId])
    return result[0]
  }

  async addLabel(momentId, labelId) {
    const statement = `INSERT INTO moment_label (moment_id,label_id) VALUES (?,?)`
    const [result] = await connection.execute(statement, [momentId, labelId])
    return result[0]
  }
}

module.exports = new MomentService()