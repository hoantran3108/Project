import Product from '../models/products'

export const getProducts = (req, res) => {
  Product.find({ name: new RegExp(req.query.name, 'i')}, (err, products) => {
    if (err) {
      return res.status(500).json({ errors: err})
    }
    res.json({products})
  }).skip(parseInt(req.query.total)).limit(3)
}

export const getSingleProduct = (req, res) => {
  Product.findOne({ _id: req.params.id }, (err, existingProduct) => {
    if (err) {
      return res.status(422).json(err)
    }
    if (existingProduct) {
      return res.json({existingProduct})
    }
  })
}

export const addProduct = (req, res) => {
  const { name, category, description, price, inventory, image } = req.body
  const product = new Product({
    name,
    category,
    description,
    price,
    inventory,
    image
  })
  product.save((err, savedProduct) => {
    if (err) {
      return res.status(500).json({ errors: err})
    } else {
      res.json({savedProduct})
    }
  })
}

export const editProduct = (req, res) => {
  const { name, description, price, quantity, image } = req.body
  Product.findOneAndUpdate({name: req.params.identifier},
    { $set: { name,
      description,
      price,
      quantity,
      image }}, (err, product) => {
        if (err || !product) {
          return res.status(500).json({errors: err})
        } else {
          res.json(product)
        }
      })
    }

    export const deleteProduct = (req, res) => {
      const { name, description, price, quantity, image } = req.body
      Product.findOneAndRemove({name: req.params.identifier}, (err) => {
        if(err) {
          return res.status(500).json({errors: err})
        }
        res.json({success: true})
      })
    }
