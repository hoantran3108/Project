import Banner from '../models/banners'

export const getBanners = (req, res) => {
  Banner.findAsync()
  .then(banners => res.json({banners}))
  .catch(errors => res.json({errors}))
}

export const checkExistingBanner = (req, res, next) => {
  const { name } = req.body
  Banner.findOneAsync({ name })
  .then(banner => next())
  .catch(errors => next(errors))
}

export const addBanner = (req, res) => {
  const banner = new Banner(req.body)
  banner.saveAsync()
  .then(() => res.json({success: true}))
  .catch(errors => res.json({errors}))
}
