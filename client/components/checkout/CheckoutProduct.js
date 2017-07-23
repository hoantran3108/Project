import React, { Component } from 'react'
import { Table, Image, Button, Input } from 'semantic-ui-react'

class CheckoutProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: props.quantityById
    }
  }

  changeQuantity = (e) => {
    if (e.target.value >= 0 && e.target.value<=100) {
      this.setState({[e.target.name]: e.target.value})
      this.props.updateCart(this.props.product._id, e.target.value)
    }
  }

  render() {
    const { _id, name, category, price, image } = this.props.product
    const { quantity } = this.state
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Button icon='remove' onClick={this.props.removeProduct} />
          </Table.Cell>
          <Table.Cell singleLine>

          </Table.Cell>
          <Table.Cell>
            {name}
          </Table.Cell>
          <Table.Cell>
            {price}
          </Table.Cell>
          <Table.Cell>
            <Input size='mini' type='number' name='quantity' value={quantity} onChange={this.changeQuantity} />
          </Table.Cell>
          <Table.Cell>
            {quantity * price}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    )
  }
}

export default CheckoutProduct
