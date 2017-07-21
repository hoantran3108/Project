import React, { Component } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import Product from './Product'
import { fetchProducts, addProductToCart } from '../../actions/productAction'
import { Card } from 'semantic-ui-react'

class ProductsList extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { addProductToCart } = this.props
    const items = map(this.props.products, item =>
      <Product key={item._id} product={item} addtoCart={() => addProductToCart(item._id)} />)
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

export default connect(mapStatetoProps, { fetchProducts, addProductToCart })(ProductsList)
