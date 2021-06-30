const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'likaikai123.',
  database: 'test'
})

const statement = `INSERT INTO products SET ?;`
const phoneJSON = require('./phone.json').data

for (let phone of phoneJSON) {
  connection.query(statement, phone)
}
