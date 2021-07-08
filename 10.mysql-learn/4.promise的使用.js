const mysql = require('mysql2')

const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'lkk',
  user: 'root',
  password: 'likaikai123.',
  connectionLimit: 10
})

// 执行sql语句
const statement = `
  select * from products where price > ? and score > ?;
`

connections.promise().execute(statement, [8000, 8]).then(([results]) => {
  console.log(results);
}).catch(err => {
  console.log(err);
})