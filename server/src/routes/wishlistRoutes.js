const express = require('express')
const {
  updateWishlist,
  getUserWishlist,
  getUserWishlistIDArray
} = require('../controllers/wishlistController')
const router = express.Router()
const { authenticateUser } = require('../middleware/authentication')
// const passport = require('passport')
// const keys = require('../config/keys')
router
  .route('/')
  .get(authenticateUser, getUserWishlist)
  .patch(authenticateUser, updateWishlist)

router.get('/product-ids',authenticateUser, getUserWishlistIDArray)

module.exports = router
