import { createSelector } from 'reselect'
import _ from 'lodash'

const productsSelector = (state) => state.products.byId
const addedIdsSelector = (state) => state.cart.addedIds
export const quantityByIdsSelector = (state) => state.cart.quantityById

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
    0)
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
