import Product from '../models/products'

export const getProducts = (req, res) => {
  Product.find({ name: new RegExp(req.query.name, 'i')})
  .skip(parseInt(req.query.total))
  .limit(6)
  .execAsync()
  .then(products => res.json({products}))
  .catch(errors => res.status(500).json({errors}))
}

export const getSingleProduct = (req, res) => {
  Product.findByIdAsync({ _id: req.params.id })
  .then(product => res.json({product}))
  .catch(errors => res.json({errors}))
}

export const checkExistingProduct = (req ,res, next) => {
  const { name } = req.body
  Product.findOneAsync({ name })
  .then(product => product ? res.status(400).json({errors: 'Product name is already existed'}) : next())
  .catch(errors => next(errors))
}

export const addProduct = (req, res) => {
  const product = new Product(req.body)
  product.saveAsync()
  .then(() => res.json({success: true}))
  .catch(errors => res.json({errors}))
}

export const editProduct = (req, res) => {
  Product.findByIdAndUpdateAsync({_id: req.params.identifier}, { $set: req.body })
  .then(product => res.json({product}))
  .catch(errors => res.json({errors}))
}

export const deleteProduct = (req, res) => {
  Product.findByIdAndRemoveAsync({_id: req.params.identifier})
  .then(() => res.json({success: true}))
  .catch(errors => res.json({errors}))
}
