import mongoose from 'mongoose'

const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  description: String
}, { timestamps: { createdAt: 'created_at' }})

export default mongoose.model('Category', categorySchema)
