const express = require('express')
const router = express.Router()
// const {
//   authenticateUser,
//   authorizePermissions,
// } = require('../middleware/authentication');

const {
  getAllCategories,
  getCategoryProducts
} = require('../controllers/categoryController')

router.route('/').get(getAllCategories)
router.route('/products').get(getCategoryProducts)

module.exports = router
