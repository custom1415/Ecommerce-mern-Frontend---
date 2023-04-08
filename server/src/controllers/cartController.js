const Cart = require('../models/Cart')

const getUserCart = async (req, res) => {
  const { userId } = req.user

  try {
    const cartItems = await Cart.find({ user: userId }).populate('product')
    console.log(cartItems, 'cart')
    res.status(200).json({ cartItems })
  } catch (error) {
    console.error(error)

    res.status(500).json({ message: 'Server Error' })
  }
}
const addToCart = async (req, res) => {
  const { productId } = req.body
  const { userId } = req.user

  try {
    let cartItem = await Cart.findOne({ user: userId, product: productId })
    console.log(cartItem, 'cartitem')

    if (cartItem) {
      // If the product already exists in the cart, increase the quantity
      cartItem.quantity += 1
    } else {
      // If the product is not already in the cart, create a new cart item
      cartItem = new Cart({ user: userId, product: productId })
    }

    // Save the cart item
    await cartItem.save()

    res.status(200).json(cartItem)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}
// const removeFromCart = async (req, res) => {
//   const { productId } = req.params
//   const { userId } = req.user

//   try {
//     // Find the cart item with the matching product ID
//     const cartItem = await Cart.findOne({
//       user: userId,
//       product: productId
//     })
//     console.log(cartItem)
//     if (!cartItem) {
//       // If the cart item doesn't exist, return an error response
//       return res.status(404).json({ message: 'Cart item not found' })
//     }

//     // Remove the cart item from the database
//     await cartItem.remove()

//     res.status(200).json({ message: 'Cart item removed successfully' })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'Server Error' })
//   }
// }
const removeFromCart = async (req, res) => {
  const { productId } = req.params
  const { userId } = req.user

  try {
    // Find the cart item with the matching product ID
    const cartItem = await Cart.findOne({
      user: userId,
      product: productId
    })

    if (cartItem.quantity > 1) {
      // If the product already exists in the cart, increase the quantity
      cartItem.quantity -= 1
      await cartItem.save()
    } else {
      // If the product is not already in the cart, create a new cart item
      // cartItem = new Cart({ user: userId, product: productId })
      await Cart.deleteOne({ user: userId, product: productId })
    }

    // Save the cart item

    res.status(200).json({ message: 'Cart item removed successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

const clearCartItem = async (req, res) => {
  const { userId } = req.user
  const { productId } = req.params

  try {
    // Remove all cart items for the user
    await Cart.deleteOne({ user: userId, product: productId })

    res
      .status(200)
      .json({ message: 'Cart item removed from cart successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}
const clearCart = async (req, res) => {
  const { userId } = req.user

  try {
    // Remove all cart items for the user
    await Cart.deleteMany({ user: userId })

    res
      .status(200)
      .json({ message: 'Cart cleared successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

module.exports = {
  addToCart,
  clearCart,
  removeFromCart,
  clearCartItem,
  getUserCart
}
