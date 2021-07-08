const mysql = require('mysql2')

// 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'lkk',
  user: 'root',
  password: 'likaikai123.'
})

// 执行sql语句
const statement = `
  select * from products where price > ? and score > ?;
`


connection.query(statement, (err, results, fields) => {
  if (err) return console.log(err);
  console.log(results);

  // 关闭连接
  // connection.destroy()
})