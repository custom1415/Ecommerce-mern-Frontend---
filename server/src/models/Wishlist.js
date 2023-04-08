const mongoose = require('mongoose')

const WishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default: []
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('wishlist', WishlistSchema)
