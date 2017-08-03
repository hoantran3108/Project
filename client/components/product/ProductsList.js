import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import { fetchProducts } from '../../actions/productAction'
import { addProductToCart } from '../../actions/cartAction'
import { addFlashMessage, removeAllMessages } from '../../actions/flashMessages'
import { Card, Button, Loader, Dimmer } from 'semantic-ui-react'

class ProductsList extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      isActivated: true
    }
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

  loadMore = () => {
    const { fetchProducts } = this.props
    this.setState({ isLoading: true})
    fetchProducts(this.props.products.length)
    .then(res => {
      this.setState({ isLoading: false})
      if (res.data.products.length < 3) {
        this.setState({ isActivated: false })
      }
    })
    .catch(err => {
      throw new Error(err)
    })
  }

  render() {
    const { products } = this.props
    const items = products.map(product => <Product key={product._id} product={product} addtoCart={this.addtoCart} />)

      const { isLoading, isActivated } = this.state
      return (
        <Card.Group>
          {items}
          {isActivated ? <Button onClick={this.loadMore}>Load more</Button> : null}
          <Dimmer active={isLoading} inverted>
            <Loader inverted />
          </Dimmer>
        </Card.Group>
      )
    }
  }

  export default connect(null, { fetchProducts, addProductToCart, addFlashMessage, removeAllMessages })(ProductsList)
