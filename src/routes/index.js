const { Router } = require('express')
const router = Router()

const users = require('./message')
const board = require('./board')

/* GET home page. */
router.use('/users', users)
router.use('/board', board)


module.exports = router
