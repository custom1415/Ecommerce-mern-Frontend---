const mongoose = require('mongoose')

const CartItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
})

module.exports = mongoose.model('CartItem', CartItemSchema)
