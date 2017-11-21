import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { compose, withState, withHandlers, onlyUpdateForKeys } from 'recompose'
import { Table, Image, Button, Input, Label, Icon, Header } from 'semantic-ui-react'
import bag from 'CSS/bag'
import Fade from '../transitions/Fade'

const BagProduct = ({ _id, name, images, price, show, errors, removeCurrentProduct, changeQuantity, quantity }) => (
  <Fade in={show} timeout={1000}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Button icon='remove' onClick={removeCurrentProduct} />
        </Table.Cell>
        <Table.Cell>
          <img className={bag.image} src={images[0]} />
        </Table.Cell>
        <Table.Cell>
          <Link to={`/product/${_id}`} className={bag.name}>{name}</Link>
        </Table.Cell>
        <Table.Cell>
          {price}
        </Table.Cell>
        <Table.Cell singleLine>
          <Input size='mini' type='number' name='quantity' value={quantity} onChange={changeQuantity} />
          {errors && <Icon name='warning circle' color='red' />}
        </Table.Cell>
        <Table.Cell>
          ${(quantity * price).toFixed(2)}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Fade>
)

const enhance = compose(
  withState('quantity', 'setQuantity', props => props.quantityById),
  withState('show', 'toggleShow', true),
  withState('errors', 'setErrors', ''),
  onlyUpdateForKeys(['show', 'quantity', 'errors']),
  withHandlers({
    changeQuantity: ({ _id, updateCart, setQuantity, setErrors }) => e => {
      const quantity = e.target.value
      setErrors('')
      if (quantity>=0 || quantity <=100) {
        setQuantity(quantity)
        updateCart(_id, quantity)
          .catch(errors => setErrors(errors))
      }
    },
    removeCurrentProduct: ({ _id, removeProduct, toggleShow }) => () => {
      toggleShow(false)
      setTimeout(() => removeProduct(_id), 1000)
    }
  })
)

export default enhance(BagProduct)
