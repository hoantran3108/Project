import React, { Component } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import Product from './Product'
import { fetchProducts, addProductToCart } from '../../actions/productAction'
import { SelectedProducts, CartTotal } from '../../selectors/SelectedProducts'
import { Card } from 'semantic-ui-react'

class ProductsList extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    console.log(this.props.total)
    const { addProductToCart } = this.props
    const items = map(this.props.products, item =>
      <Product key={item._id} product={item} addtoCart={addProductToCart} />)
    return (
      <Card.Group>
        {items}
      </Card.Group>
    )
  }
}

const mapStatetoProps = (state) => ({
    products: state.products.byId,
    selected: SelectedProducts(state),
    total: CartTotal(state)
})

export default connect(mapStatetoProps, { fetchProducts, addProductToCart })(ProductsList)
