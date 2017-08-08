import React, { Component } from 'react'
import { withState, withHandlers, compose, flattenProp } from 'recompose'
import { Table, Image, Button, Input, Label } from 'semantic-ui-react'

const BagProduct = ({ name, price, quantity, changeQuantity, removeProduct, errors }) => (
  <Table.Body>
    <Table.Row>
      <Table.Cell>
        <Button icon='remove' onClick={removeProduct} />
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
        <Input size='mini' type='number' name='quantity' value={quantity} onChange={changeQuantity} />
        {errors}
      </Table.Cell>
      <Table.Cell>
        {quantity * price}
      </Table.Cell>
    </Table.Row>
  </Table.Body>
)

const enhance = compose(
  withState('quantity', 'setQuantity', props => props.quantityById),
  withState('errors', 'setErrors', null),
  flattenProp('product'),
  withHandlers({
    changeQuantity: ({ _id, updateCart, setQuantity, setTotal, total, setErrors }) => e => {
      if (e.target.value >= 0 && e.target.value<=100) {
        setQuantity(e.target.value)
        updateCart(_id, e.target.value)
        .catch(errors => console.log(errors))
      }
    },
    removeProduct: ({ _id, removeProduct }) => e => removeProduct(_id)
  })
)

export default enhance(BagProduct)
