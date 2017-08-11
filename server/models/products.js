import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productSchema = new Schema({
   name: {
    type: String,
    max: 50,
    unique: true,
    require: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    require: true
  },
  player: {
    type: String,
    max: 10
  },
  playtime: {
    type: String,
    max: 10
  },
  age: {
    type: String,
    max: 3
  },
  description: String,
  price: Number,
  inventory: {
    type: Number,
    max: 1000,
    require: true
  },
  images: []
}, { timestamps: { createdAt: 'created_at' }})

export default mongoose.model('Product', productSchema)
