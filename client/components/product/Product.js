import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Product extends Component {

  render() {
    const { _id, name, description, price, quantity } = this.props.product
    const { addtoCart } = this.props
    const extra = <Button color='green' onClick={addtoCart}><Icon name='shop' />Add to cart</Button>
    return (
      <Card
      header={name}
      extra={extra}
    />
    )
  }
}

export default Product
