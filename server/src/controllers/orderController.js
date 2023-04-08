// const stripe = require('stripe')(process.env.STRIPE_KEY)
// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   const total = items.reduce(
//     (total, item) => total + item.product.price * item.quantity,
//     0
//   )

//   return total * 100
// }
// const stripeController = async (req, res) => {
//   const { items } = req.body
//   console.log(req.body)
//   console.log(items, 'items')

//   // Create a PaymentIntent with the order amount and currency

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: 'usd'
//   })

//   res.send({
//     clientSecret: paymentIntent.client_secret
//   })
// }

// module.exports = stripeController
const stripe = require('stripe')(process.env.STRIPE_KEY)

const Order = require('../models/Order')
const Product = require('../models/Product')

const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermissions } = require('../utils')
const Cart = require('../models/Cart')

// const fakeStripeAPI = async ({ amount, currency }) => {
//   const client_secret = 'someRandomValue'
//   return { client_secret, amount }
// }
const calculateOrderAmount = (items) => {
  const total = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )
}

// const createOrder = async (req, res) => {
//   const { items: cartItems } = req.body

//   // const { items: cartItems, tax, shippingFee } = req.body

//   if (!cartItems || cartItems.length < 1) {
//     throw new CustomError.BadRequestError('No cart items provided')
//   }
//   // if (!tax || !shippingFee) {
//   //   throw new CustomError.BadRequestError('Please provide tax and shipping fee')
//   // }

//   let orderItems = []
//   let subtotal = 0

//   for (const item of cartItems) {
//     const dbProduct = await Product.findOne({ _id: item.product })
//     if (!dbProduct) {
//       throw new CustomError.NotFoundError(
//         `No product with id : ${item.product}`
//       )
//     }
//     const { title, price, image, _id ,description} = dbProduct
//     const singleOrderItem = {
//       quantity: item.quantity,
//       name: title,
//       description,
//       price,
//       image,
//       product: _id
//     }
//     // add item to order
//     orderItems = [...orderItems, singleOrderItem]
//     // calculate subtotal
//     subtotal += item.quantity * price
//   }
//   // calculate total
//   // const total = tax + shippingFee + subtotal
//   const total = subtotal
//   // get client secret
//   // const paymentIntent = await fakeStripeAPI({
//   //   amount: total,
//   //   currency: 'usd'
//   // })
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: parseInt(total * 100),
//     currency: 'usd'
//   })

//   const order = await Order.create({
//     orderItems,
//     total,
//     subtotal,
//     // tax,
//     // shippingFee,
//     clientSecret: paymentIntent.client_secret,
//     user: req.user.userId
//   })

//   // await Cart.deleteMany()

//   res
//     .status(StatusCodes.CREATED)
//     .json({ order, clientSecret: order.clientSecret })
// }
const createOrder = async (req, res) => {
  const { items: cartItems } = req.body

  // const { items: cartItems, tax, shippingFee } = req.body

  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError('No cart items provided')
  }
  // if (!tax || !shippingFee) {
  //   throw new CustomError.BadRequestError('Please provide tax and shipping fee')
  // }

  let orderItems = []
  let subtotal = 0

  for (const item of cartItems) {
    const dbProduct = await Product.findOne({ _id: item.product })
    if (!dbProduct) {
      throw new CustomError.NotFoundError(
        `No product with id : ${item.product}`
      )
    }
    const { title, price, image, _id, description } = dbProduct
    const singleOrderItem = {
      quantity: item.quantity,
      title,
      description,
      price,
      image,
      product: _id
    }
    // add item to order
    orderItems = [...orderItems, singleOrderItem]
    // calculate subtotal
    subtotal += item.quantity * price
  }
  // calculate total
  // const total = tax + shippingFee + subtotal
  const total = subtotal
  // get client secret
  // const paymentIntent = await fakeStripeAPI({
  //   amount: total,
  //   currency: 'usd'
  // })
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(total * 100),
    currency: 'usd'
  })

  // delete any existing pending orders for this user
  console.log(req.user.userId)
  const existingOrder = await Order.deleteMany({
    user: req.user.userId,
    status: 'pending'
  })

  const order = await Order.create({
    orderItems,
    total,
    subtotal,
    // tax,
    // shippingFee,
    clientSecret: paymentIntent.client_secret,
    user: req.user.userId
  })

  // await Cart.deleteMany()

  res
    .status(StatusCodes.CREATED)
    .json({ order, clientSecret: order.clientSecret })
}

const getAllOrders = async (req, res) => {
  const orders = await Order.find({})
  res.status(StatusCodes.OK).json({ orders, count: orders.length })
}
const getSingleOrder = async (req, res) => {
  const { id: orderId } = req.params
  const order = await Order.findOne({ _id: orderId })
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`)
  }
  checkPermissions(req.user, order.user)
  res.status(StatusCodes.OK).json({ order })
}
const getCurrentUserOrders = async (req, res) => {
  await Order.deleteMany({
    user: req.user.userId,
    status: 'pending'
  })

  const orders = await Order.find({ user: req.user.userId }).sort('-updatedAt')
  res.status(StatusCodes.OK).json({ orders, count: orders.length })
}
const updateOrder = async (req, res) => {
  const { id: orderId } = req.params
  const { paymentIntentId } = req.body

  const order = await Order.findOne({ _id: orderId })
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`)
  }
  checkPermissions(req.user, order.user)

  order.paymentIntentId = paymentIntentId
  order.status = 'paid'
  await order.save()

  res.status(StatusCodes.OK).json({ order })
}

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder
}
