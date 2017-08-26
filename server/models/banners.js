import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bannerSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  description: String,
  image: {
    type: String,
    require: true
  }
}, { timestamps: { createdAt: 'created_at' }})

export default mongoose.model('Banner', bannerSchema)
