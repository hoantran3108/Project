import { createSelector } from 'reselect'

export const productsSelector = (state) => state.get('products').toJS()
export const addedIdsSelector = (state) => state.getIn(['cart','addedIds']).toJS()
export const quantityByIdsSelector = (state) => state.getIn(['cart','quantityById']).toJS()
export const cartSelector = (state) => state.get('cart').toJS()

const getProducts = (products, addedIds) => products.filter(product => addedIds.includes(product._id))

const getTotal = (products, quantitybyIds) => products.reduce((total, product) =>
    total + product.price * quantitybyIds[product._id],0).toFixed(2)

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
