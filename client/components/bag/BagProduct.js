import React, { Component } from 'react'
<<<<<<< HEAD
import { withState, withHandlers, compose, flattenProp } from 'recompose'
import { Table, Image, Button, Input } from 'semantic-ui-react'

const BagProduct = ({ name, price, quantity, changeQuantity, removeProduct }) => (
=======
import { withState, withHandlers, compose } from 'recompose'
import { Table, Image, Button, Input } from 'semantic-ui-react'

const BagProduct = ({ product, quantity, changeQuantity, removeProduct }) => (
>>>>>>> 00424e5c7680c5cd530e60c23c90a5967fc24b3d
  <Table.Body>
    <Table.Row>
      <Table.Cell>
        <Button icon='remove' onClick={removeProduct} />
      </Table.Cell>
      <Table.Cell singleLine>
      </Table.Cell>
      <Table.Cell>
<<<<<<< HEAD
        {name}
      </Table.Cell>
      <Table.Cell>
        {price}
=======
        {product.name}
      </Table.Cell>
      <Table.Cell>
        {product.price}
>>>>>>> 00424e5c7680c5cd530e60c23c90a5967fc24b3d
      </Table.Cell>
      <Table.Cell>
        <Input size='mini' type='number' name='quantity' value={quantity} onChange={changeQuantity} />
      </Table.Cell>
      <Table.Cell>
<<<<<<< HEAD
        {quantity * price}
=======
        {quantity * product.price}
>>>>>>> 00424e5c7680c5cd530e60c23c90a5967fc24b3d
      </Table.Cell>
    </Table.Row>
  </Table.Body>
)

const enhance = compose(
  withState('quantity', 'setQuantity', props => props.quantityById),
<<<<<<< HEAD
  flattenProp('product'),
  withHandlers({
    changeQuantity: ({ _id, updateCart, setQuantity, setTotal, total }) => e => {
      if (e.target.value >= 0 && e.target.value<=100) {
        setQuantity(e.target.value)
        updateCart(_id, e.target.value)
      }
    },
    removeProduct: ({ _id, removeProduct }) => e => removeProduct(_id)
=======
  withHandlers({
    changeQuantity: ({ product, updateCart, setQuantity }) => e => {
      if (e.target.value >= 0 && e.target.value<=100) {
        setQuantity(e.target.value)
        updateCart(product._id, e.target.value)
      }
    }
>>>>>>> 00424e5c7680c5cd530e60c23c90a5967fc24b3d
  })
)

export default enhance(BagProduct)
