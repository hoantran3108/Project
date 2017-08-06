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
  connect(mapStatetoProps, { removeProducts, removeProduct, updateCart, removeAllMessages })
)

export default enhance(BagPage)
