import Product from '../models/products'

export const getProducts = (req, res) => {
  Product.find({ name: new RegExp(req.query.name, 'i')}, (err, products) => {
    if (err) {
      return res.status(500).json({ errors: err})
    }
    if (products) {
      return res.json({products})
    }
  }).skip(parseInt(req.query.total)).limit(3)
}

export const getSingleProduct = (req, res) => {
  Product.findById({ _id: req.params.id }, (err, existingProduct) => {
    if (err) {
      return res.status(422).json(err)
    }
    if (existingProduct) {
      return res.json({existingProduct})
    }
  })
}

export const checkExistingProduct = (req ,res, next) => {
  const { name } = req.body
  Product.findOne({ name }, (err, existingProduct) => {
    if (err || existingProduct) {
      next(err)
    }
    next()
  })
}

export const addProduct = (req, res) => {
  const product = new Product(req.body)
  product.save((err, savedProduct) => {
    if (err) {
      return res.status(500).json(err)
    }
    if (savedProduct) {
      return res.json({ success: true })
    }
  })
}

export const editProduct = (req, res) => {
  const { name, description, price, quantity } = req.body
  Product.findOneAndUpdate({name: req.params.identifier},
    { $set: { name, description, price, quantity }}, (err, product) => {
      if (err || !product) {
        return res.status(500).json({errors: err})
      } else {
        res.json(product)
      }
    }
  )
}

export const deleteProduct = (req, res) => {
  const { name, description, price, quantity } = req.body
  Product.findOneAndRemove({name: req.params.identifier}, (err) => {
    if(err) {
      return res.status(500).json({errors: err})
    }
    res.json({success: true})
  })
}
