import Category from '../models/categories'

export const checkExistingCategory = (req, res, next) => {
  const { name } = req.body
  Category.findOne({ name }, (err, existingCategory) => {
    if (err || existingCategory) {
      next(err)
    }
    next()
  })
}

export const addCategory = (req, res) => {
  const { name, description } = req.body
  const category = new Category({ name, description })
  category.save((err, savedCategory) => {
    if (err) {
      return res.status(500).json(err)
    }
    if (savedCategory) {
      return res.json({ success: true })
    }
  })
}
