const express = require('express')

const router = express.Router()

router.use(timeLog = (req, res, next) => {
  console.log('Time', Date.now());
  next()
})

router.get('/', (req, res) => {
  res.send('Birds Home page')
})

router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router