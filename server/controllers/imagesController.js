import Image from '../models/images'

// @TODO: add function addImagewithId 

export const getImageswithId = (_id) => {
  Image.find({ _id }, (err, images) => {
    if (err) {
      return res.json(err)
    }
    return images
  })
}
