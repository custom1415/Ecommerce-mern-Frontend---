const express = require('express')

const router = express.Router()
const { authenticateUser } = require('../middleware/authentication')
const {
  addToCart,
  getUserCart,
  removeFromCart,
  clearCartItem,
  clearCart
} = require('../controllers/cartController')
// const passport = require('passport')
// const keys = require('../config/keys')
router
  .route('/')
  .get(authenticateUser, getUserCart)
  .post(authenticateUser, addToCart)
router.delete('/clear/', authenticateUser, clearCart)
router.delete('/clear/:productId', authenticateUser, clearCartItem)
router.route('/:productId').delete(authenticateUser, removeFromCart)

module.exports = router
