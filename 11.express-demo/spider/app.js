const express = require('express')
const request = require('request')
const cheerio = require('cheerio');

const app = express()
const port = 3000

// 爬虫：爬数据前先看下robots.txt 是否允许爬取
// https://www.jikexueyuan.com/robots.txt

app.get('/', (req, res) => {
  request('https://www.jikexueyuan.com/', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    // $拿到了整个body的前端选择器
    const $ = cheerio.load(body);

    res.send({
      'classNum':$('.bd>ul>li').length
    })
  });
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})