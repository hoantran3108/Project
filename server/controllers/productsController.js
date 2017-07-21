import Product from '../models/products'

export const getProducts = (req, res) => {
  Product.find(function(err, products) {
    if (err) {
      return res.status(500).json({ errors: err})
    }
    res.json({products})
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
  product.save(function(err, savedProduct) {
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
      image }},function(err, product) {
        if (err || !product) {
          return res.status(500).json({errors: err})
        } else {
          res.json(product)
        }
      })
    }

    export const deleteProduct = (req, res) => {
      const { name, description, price, quantity, image } = req.body
      Product.findOneAndRemove({name: req.params.identifier}, function(err) {
        if(err) {
          return res.status(500).json({errors: err})
        }
        res.json({success: true})
      })
    }
