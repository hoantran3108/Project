import React, { Component } from 'react'
import { withState, withHandlers, compose } from 'recompose'
import { Table, Image, Button, Input } from 'semantic-ui-react'

const BagProduct = ({ product, quantity, changeQuantity, removeProduct }) => (
  <Table.Body>
    <Table.Row>
      <Table.Cell>
        <Button icon='remove' onClick={removeProduct} />
      </Table.Cell>
      <Table.Cell singleLine>
      </Table.Cell>
      <Table.Cell>
        {product.name}
      </Table.Cell>
      <Table.Cell>
        {product.price}
      </Table.Cell>
      <Table.Cell>
        <Input size='mini' type='number' name='quantity' value={quantity} onChange={changeQuantity} />
      </Table.Cell>
      <Table.Cell>
        {quantity * product.price}
      </Table.Cell>
    </Table.Row>
  </Table.Body>
)

const enhance = compose(
  withState('quantity', 'setQuantity', props => props.quantityById),
  withHandlers({
    changeQuantity: ({ product, updateCart, setQuantity }) => e => {
      if (e.target.value >= 0 && e.target.value<=100) {
        setQuantity(e.target.value)
        updateCart(product._id, e.target.value)
      }
    }
  })
)

export default enhance(BagProduct)
