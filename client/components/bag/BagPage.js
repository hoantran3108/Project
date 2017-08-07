import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'
import { removeProducts } from '../../actions/cartAction'
import { removeProduct, updateCart } from '../../actions/cartAction'
import { removeAllMessages } from '../../actions/flashMessages'
import { SelectedProducts, quantityByIdsSelector, CartTotal } from '../../selectors/SelectedProducts'
import { Container } from 'semantic-ui-react'
import BagList from './BagList'

const BagPage = (props) => (
  <Container>
    <BagList {...props}/>
  </Container>
)

const mapStatetoProps = (state) => ({
  products: SelectedProducts(state),
  quantityByIds: quantityByIdsSelector(state),
  total: CartTotal(state)
})

const enhance = compose(
  withRouter,
<<<<<<< HEAD
  connect(mapStatetoProps, { removeProducts, removeProduct, updateCart, removeAllMessages })
=======
  connect(mapStatetoProps, { removeProducts, removeProduct, updateCart, removeAllMessages }),
  withHandlers({
    removeProducts: ({ removeProducts }) => event => removeProducts()
  })
>>>>>>> 00424e5c7680c5cd530e60c23c90a5967fc24b3d
)

export default enhance(BagPage)
