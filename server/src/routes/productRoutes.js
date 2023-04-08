const express = require('express')
const router = express.Router()
// const {
//   authenticateUser,
//   authorizePermissions,
// } = require('../middleware/authentication');

const {
  getAllProducts,
  getSingleProduct,
  searchProducts,
 
} = require('../controllers/productController')
const { authenticateUser } = require('../middleware/authentication')

router.route('/').get(getAllProducts)

router.route('/search').get(searchProducts)
router.route('/:id').get(getSingleProduct)

module.exports = router
