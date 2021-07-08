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

connection.execute(statement, [8000, 8], (err, results) => {
  console.log(results);
})

// 1.sql查询性能较低
// sql的执行过程：解析、优化、转换、执行
// 2.sql注入


// prepare 预编译语句
// 1.增强性能 
// 2.防止sql注入