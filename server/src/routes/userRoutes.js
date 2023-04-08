const express = require('express')

const router = express.Router()
const { authenticateUser } = require('../middleware/authentication')
const { showCurrentUser } = require('../controllers/userController')
// const passport = require('passport')
// const keys = require('../config/keys')

router.get('/me', authenticateUser, showCurrentUser)

module.exports = router
