import mongoose from 'mongoose'

const Schema = mongoose.Schema

const imageSchema = Schema({
  _id: String,
  images: []
})

export default mongoose.model('Image', imageSchema)
