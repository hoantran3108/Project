import { createSelector } from 'reselect'
import _ from 'lodash'

export const productsSelector = (state) => state.get('products').toJS()
export const addedIdsSelector = (state) => state.getIn(['cart','addedIds']).toJS()
export const quantityByIdsSelector = (state) => state.getIn(['cart','quantityById']).toJS()
export const cartSelector = (state) => state.get('cart').toJS()

const getProducts = (products, addedIds) => {
  const selectedProducts = _.filter(
    products,
    product => _.includes(addedIds, product._id)
  )
  return selectedProducts
}

const getTotal = (products, quantitybyIds) => {
  const total = products.reduce((total, product) =>
    total + product.price * quantitybyIds[product._id],
    0).toFixed(2)
  return total
}

export const SelectedProducts = createSelector(
  productsSelector,
  addedIdsSelector,
  getProducts
)

export const CartTotal = createSelector(
  SelectedProducts,
  quantityByIdsSelector,
  getTotal
)
