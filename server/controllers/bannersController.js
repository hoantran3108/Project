import Banner from '../models/banners'
import { findProductIdByName } from './productsController'

export const getBanners = (req, res) => {
  Banner.findAsync()
    .then(banners => res.json({banners}))
    .catch(errors => res.json({errors}))
}

export const checkExistingBanner = (req, res, next) => {
  const { name } = req.body
  Banner.findOneAsync({ name })
    .then(() => next())
    .catch(errors => next(errors))
}

export const addBanner = (req, res) => {
  const { name, image, productName } = req.body
  const { _id } = findProductIdByName(productName)
  const banner = new Banner({
    name,
    image,
    product: _id
  })
  banner.saveAsync()
    .then(() => res.json({success: true}))
    .catch(errors => res.json({errors}))
}
