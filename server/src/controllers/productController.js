const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

// const createProduct = async (req, res) => {
//   req.body.user = req.user.userId
//   const product = await Product.create(req.body)
//   res.status(StatusCodes.CREATED).json({ product })
// }

const searchProducts = async (req, res) => {
  try {
    const { q } = req.query

    // Perform the product search and select only the title, image, and price fields

    const page = Number(req.query.page) || null
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    let products
    products = await Product.find({
      title: { $regex: new RegExp(`^${q}`, 'i') }
    })
      .skip(req.query.page ? skip : 0)
      .limit(req.query.limit ? limit : 5)
    if (products.length < 5 ) {
      console.log(page)
      const additionalProds = await Product.find({
        $or: [
          { title: { $regex: new RegExp(q, 'i') } },
          { category: { $regex: new RegExp(q, 'i') } }
        ]
      })
        .skip(req.query.page ? skip : 0)
        .limit(req.query.limit ? limit : 10 - products.length)
      products = [...products, ...additionalProds]
    }
    // res.status(200).json({ products, len: products.length, page })
    res.status(200).json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

const getAllProducts = async (req, res) => {
  const products = await Product.find({})
  res.status(StatusCodes.OK).json({ products, count: products.length })
}
const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params

  const product = await Product.findOne({ _id: productId })
  const moreFromTheCategory = await Product.find({
    _id: { $ne: productId },
    category: product.category
  }).limit(8)

  
  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`)
  }

  res.status(StatusCodes.OK).json({ product, moreFromTheCategory })
}

// const getAllCategories = async (req, res) => {
//   try {
//     const categories = await Product.aggregate([
//       { $group: { _id: '$category' } },
//       { $project: { _id: 0, category: '$_id' } }
//     ])

//     res.json(categories)
//   } catch (err) {
//     console.error(err)
//     res.status(500).json({ msg: 'Server error' })
//   }
// }
// // const updateProduct = async (req, res) => {
// //   const { id: productId } = req.params

// //   const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
// //     new: true,
// //     runValidators: true
// //   })

// //   if (!product) {
// //     throw new CustomError.NotFoundError(`No product with id : ${productId}`)
// //   }

// //   res.status(StatusCodes.OK).json({ product })
// // }
// const getCategoryProducts = async (req, res) => {
//   console.log(req.query)
//   const categories = req.query.categories.split(',')
//   const products = await Product.aggregate([
//     {
//       $match: {
//         category: { $in: categories }
//       }
//     },
//     {
//       $group: {
//         _id: '$category',
//         products: { $push: '$$ROOT' }
//       }
//     },
//     {
//       $project: {
//         category: '$_id',
//         products: 1,
//         _id: 0
//       }
//     }
//   ])
//   res.status(200).json(products)
// }
module.exports = {
  getAllProducts,
  getSingleProduct,
  searchProducts
}
