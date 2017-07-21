import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class CheckoutProduct extends Component {

  render() {
    const { _id, name, category, price, image } = this.props.product
    const { quantityById } = this.props
    return (
      <div>
        {quantityById}
      </div>
    )
  }
}

export default CheckoutProduct
