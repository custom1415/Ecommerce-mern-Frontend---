const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    },
    title: { type: String, required: true },
    price: {
      type: Number,
      required: true
    },

    category: { type: String, required: true },

    description: { type: String, required: true },

    image: { type: String, required: true },
    rating: {
      rate: Number,
      count: Number
    }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

// ProductSchema.virtual('reviews', {
//   ref: 'Review',
//   localField: '_id',
//   foreignField: 'product',
//   justOne: false
// })

// ProductSchema.pre('remove', async function (next) {
//   await this.model('Review').deleteMany({ product: this._id })
// })

module.exports = mongoose.model('Product', ProductSchema)
