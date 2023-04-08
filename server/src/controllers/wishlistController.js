const { JSONCookies } = require('cookie-parser')
const Wishlist = require('../models/Wishlist')
const { createJWT, isTokenValid } = require('../utils')

exports.getUserWishlist = async (req, res) => {
  try {
    const { userId } = req.user

    const wishlist = await Wishlist.findOne({ user: userId })
      .populate('user')
      .populate('wishlist')

    if (!wishlist && userId) {
      return res.status(200).json({ wishlist: [] })
    }

    res.status(200).json({ wishlist: wishlist.wishlist })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}
exports.getUserWishlistIDArray = async (req, res) => {
  try {
    const { userId } = req.user

    const wishlist = await Wishlist.findOne({ user: userId })

    if (!wishlist && userId) {
      return res.status(200).json({ wishlist: [] })
    }
    res.status(200).json(wishlist.wishlist)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

exports.updateWishlist = async (req, res) => {
  console.log(req.user)
  try {
    const { userId } = req.user
    const { _id: productId } = req.body.wishlistItem

    let wishlist = await Wishlist.findOne({ user: userId })

    if (!wishlist) {
      wishlist = new Wishlist({
        user: userId,
        wishlist: [productId]
      })
    } else if (wishlist.wishlist.includes(productId)) {
      wishlist.wishlist = wishlist.wishlist.filter(
        (wishlistItemId) => wishlistItemId.toString() !== productId
      )
    } else {
      wishlist.wishlist.unshift(req.body.wishlistItem)
    }

    await wishlist.save()
    // const populatedWishlist = await (await wishlist.save()).populate('wishlist')

    res.status(201).json({ msg: 'Updated Wishlist' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}
