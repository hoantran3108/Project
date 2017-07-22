import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Product extends Component {


  addtoCart = () => {
    this.props.addtoCart(this.props.product._id)
  }

  render() {
    const { _id, name, description, price, quantity } = this.props.product
    const extra = <Button color='green' onClick={this.addtoCart}><Icon name='shop' />Add to cart</Button>
    return (
      <Card
      header={name}
      extra={extra}
    />
    )
  }
}

export default Product
