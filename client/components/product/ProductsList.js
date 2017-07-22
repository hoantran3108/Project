import React, { Component } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import Product from './Product'
import { fetchProducts } from '../../actions/productAction'
import { addProductToCart } from '../../actions/cartAction'
import { addFlashMessage, removeAllMessages } from '../../actions/flashMessages'
import { Card } from 'semantic-ui-react'

class ProductsList extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  addtoCart = (id) => {
    const { addProductToCart, addFlashMessage, removeAllMessages } = this.props
    addProductToCart(id)
    removeAllMessages()
    addFlashMessage({
      type: 'success',
      text: 'Product added to cart'
    })
  }

  render() {
    const items = map(this.props.products, item =>
      <Product key={item._id} product={item} addtoCart={this.addtoCart} />)
    return (
      <Card.Group>
        {items}
      </Card.Group>
    )
  }
}

const mapStatetoProps = (state) => ({
    products: state.products.byId,
})

export default connect(mapStatetoProps, { fetchProducts, addProductToCart, addFlashMessage, removeAllMessages })(ProductsList)
