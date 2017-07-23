import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { SelectedProducts, quantityByIdsSelector } from '../../selectors/SelectedProducts'
import CheckoutProduct from './CheckoutProduct'
import { removeProduct, updateCart } from '../../actions/cartAction'
import { Container, Table, Button, Icon, Message } from 'semantic-ui-react'

class CheckoutList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      errors: {}
    }
  }

  componentWillMount = () => {
    let total = this.props.products.reduce((total, product) =>
    total + product.price*this.props.quantityByIds[product._id], 0)
    this.setState({total})
  }

  redirectToShop = () => {
    this.props.history.replace('/')
  }

  updateCart = (id, quantity) => {
    this.props.updateCart(id, quantity)
    .then(() => {
      let total = this.props.products.reduce((total, product) =>
      total + product.price*this.props.quantityByIds[product._id], 0)
      this.setState({total})
    })
    .catch(err => this.setState({errors[field]: err}))
  }

  render() {
    const { removeProduct } = this.props
    const products = _.map(this.props.products, product =>
      <CheckoutProduct
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
            <Button onClick={this.props.removeProducts}>
              Remove All
            </Button>
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
  quantityByIds: quantityByIdsSelector(state)
})

export default connect(mapStatetoProps, { removeProduct, updateCart })(CheckoutList)
