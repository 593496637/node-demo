const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json(['法兰克', '阿飞', '奥洛菲'])
})

router.post('/:id', (req, res, next) => {
  res.json(`${req.params.id}用户的信息`)
})

router.post('/', (req, res, next) => {
  res.json('create user success')
})



module.exports = router