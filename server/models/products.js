import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productSchema = new Schema({
   name: {
    type: String,
    unique: true,
    require: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    require: true
  },
  description: String,
  price: Number,
  inventory: Number
})

export default mongoose.model('Product', productSchema)
