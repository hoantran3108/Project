import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import { SelectedProducts, quantityByIdsSelector, CartTotal } from '../../selectors/SelectedProducts'
import BagProduct from './BagProduct'
import { removeProduct, updateCart } from '../../actions/cartAction'
import { removeAllMessages } from '../../actions/flashMessages'
import { Container, Table, Button, Icon, Message, Header, Modal } from 'semantic-ui-react'

class BagList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: props.total,
      errors: {}
    }
  }

  redirectToShop = () => {
    this.props.history.push('/')
  }

  updateCart = (id, quantity) => {
    const { updateCart } = this.props
    updateCart(id, quantity)
    .then(() => {
      const { total } = this.props
      this.setState({ total })
    })
    .catch(err => {
      let errors = this.state.errors
      errors['field'] = err
      this.setState({errors})
    })
  }

  checkout = () => {
    const { removeAllMessages, history } = this.props
    removeAllMessages()
    history.push('/checkout')
  }

  render() {
    const { removeProduct } = this.props
    const products = _.map(this.props.products, product =>
      <BagProduct
        key={product._id}
        product={product}
        quantityById={this.props.quantityByIds[product._id]}
        removeProduct={() => removeProduct(product._id)}
        updateCart={this.updateCart}
      />
    )
    const checkoutCart =
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Remove</Table.HeaderCell>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Unit Price</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Subtotal</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {products}
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell>
            <Modal trigger={<Button>Remove All</Button>} size='small'>
            <Header content='Archive Old Messages' />
            <Modal.Actions>
              <Button color='red' inverted>
                <Icon name='remove' /> No
              </Button>
              <Button color='green' inverted onClick={this.props.removeProducts}>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Table.HeaderCell>
        <Table.HeaderCell colSpan='4'>
          <Button
            floated='right'
            color='green'
            onClick={this.checkout}
            >Check out
          </Button>
          <Button
            icon='shop'
            label={{ as: 'a', basic: true, content: 'Continue' }}
            labelPosition='right'
            onClick={this.redirectToShop}
          />
        </Table.HeaderCell>
        <Table.HeaderCell>
          {this.state.total}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

  const emptyCart =
  <Message negative size='massive'>
    <Message.Header>Oops! There are no products in your bag. Please add some
      <Button animated='fade' floated='right' onClick={this.redirectToShop}>
        <Button.Content visible>
          <Icon name='shop' />
        </Button.Content>
        <Button.Content hidden>
          Shop
        </Button.Content>
      </Button>
    </Message.Header>
  </Message>
  return (
    <Container>
      {_.isEmpty(this.props.products) ? emptyCart : checkoutCart}
    </Container>
  )
}
}

const mapStatetoProps = (state) => ({
  products: SelectedProducts(state),
  quantityByIds: quantityByIdsSelector(state),
  total: CartTotal(state)
})

export default connect(mapStatetoProps, { removeProduct, updateCart, removeAllMessages })(BagList)
