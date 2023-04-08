// const Category = require('../models/category')

const Product = require('../models/Product')
const getAllCategories = async (req, res) => {
  try {
    const categories = await Product.aggregate([
      { $group: { _id: '$category' } },
      { $project: { _id: 0, category: '$_id' } },
      { $sort: { category: 1 } }
    ])

    res.json(categories)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server error' })
  }
}

// const getCategoryProducts = async (req, res) => {
//   console.log(req.query)
//   const category = req.query.category
//   const products = await Product.aggregate([
//     {
//     $match: {
//         category: category
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
// const getCategoryProducts = async (req, res) => {
//   const category = req.query.category
//   const pageSize = parseInt(req.query.pageSize) || 10 // default page size is 10
//   const page = parseInt(req.query.page) || 1 // default page is 1
//   const sortField = req.query.sort

//   const count = await Product.countDocuments({ category: category }) // count total documents for pagination

//   const sortStage = {
//     $sort: {
//       updatedAt: -1
//     }
//   }

//   if (sortField) {
//     sortStage['$sort'] = {
//       [sortField.split(' ')[0]]: sortField.split(' ')[1] === 'asc' ? 1 : -1
//     }
//   }
//   console.log(sortStage)

//   const products = await Product.aggregate([
//     {
//       $match: {
//         category: category
//       }
//     },
//     {
//       $skip: (page - 1) * pageSize
//     },
//     {
//       // $limit: pageSize
//       $limit: 30
//     },
//     sortStage,
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

//   res.status(200).json({
//     products: products,
//     totalPages: Math.ceil(count / pageSize), // calculate total pages based on count and page size
//     currentPage: page // send current page number
//   })
// }

const getCategoryProducts = async (req, res) => {
  const category = req.query.category
  const pageSize = parseInt(req.query.pageSize) || 10 // default page size is 10
  const page = parseInt(req.query.page) || 1 // default page is 1
  const sortField = req.query.sort

  const count = await Product.countDocuments({ category: category }) // count total documents for pagination

  const sortStage = {
    $sort: {
      updatedAt: -1
    }
  }

  if (sortField) {
    sortStage['$sort'] = {
      [sortField.split(' ')[0]]: sortField.split(' ')[1] === 'asc' ? 1 : -1
    }
  }
  console.log(sortStage)

  const products = await Product.aggregate([
    {
      $match: {
        category: category
      }
    },
    {
      $skip: (page - 1) * pageSize
    },
    {
      $limit: 30
    },
    sortStage,
    {
      $project: {
        _id: 1,
        id: 1,
        title: 1,
        price: 1,
        image: 1,
        description: 1,
        rating: 1
      }
    }
  ])

  res.status(200).json({
    category: category,
    products: products,
    totalPages: Math.ceil(count / pageSize), // calculate total pages based on count and page size
    currentPage: page // send current page number
  })
}

module.exports = {
  getAllCategories,
  getCategoryProducts
}
