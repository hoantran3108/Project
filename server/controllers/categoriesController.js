import Category from '../models/categories'

export const getCategories = (req, res) => {
  Category.findAsync()
  .then(categories => res.json({categories}))
  .catch(errors => res.json({errors}))
}

export const checkExistingCategory = (req, res, next) => {
  const { name } = req.body
  Category.findOneAsync({ name })
  .then(category => next())
  .catch(errors => next(errors))
}

export const addCategory = (req, res) => {
  const category = new Category(req.body)
  category.saveAsync()
  .then(() => res.json({success: true}))
  .catch(errors => res.json({errors}))
}
