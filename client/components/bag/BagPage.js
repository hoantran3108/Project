import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import { removeProducts } from '../../actions/cartAction'
import { removeProduct, updateCart } from '../../actions/cartAction'
import { removeAllMessages } from '../../actions/flashMessages'
import { SelectedProducts, quantityByIdsSelector, CartTotal } from '../../selectors/SelectedProducts'
import { authenticateSelector } from '../../selectors/SelectedUser'
import { Container } from 'semantic-ui-react'
import { cartMessagesSelector } from '../../selectors/SelectedFlashMessages'
import BagList from './BagList'
import FlashMessagesList from '../flash/FlashMessagesList'

const BagPage = (props) => (
  <Container>
    <FlashMessagesList messages={props.cartMessages} />
    <BagList {...props}/>
  </Container>
)

const mapStatetoProps = (state) => ({
  products: SelectedProducts(state),
  quantityByIds: quantityByIdsSelector(state),
  total: CartTotal(state),
  isAuthenticated: authenticateSelector(state),
  cartMessages: cartMessagesSelector(state)
})

const enhance = compose(
  withRouter,
  connect(mapStatetoProps, { removeProducts, removeProduct, updateCart, removeAllMessages }),
  lifecycle({
    componentDidMount() {
      this.props.removeAllMessages()
    }
  })
)

export default enhance(BagPage)
