import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withState, withHandlers, compose, flattenProp } from 'recompose'
import { Table, Image, Button, Input, Label, Icon, Header } from 'semantic-ui-react'
import bag from 'CSS/bag'
import Fade from '../transitions/Fade'

const BagProduct = ({ show, _id, name, price, quantity, images, changeQuantity, removeProduct, errors }) => (
  <Fade in={show} timeout={1000}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Button icon='remove' onClick={removeProduct} />
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
  withState('errors', 'setErrors', ''),
  withState('show', 'toggleShow', true),
  flattenProp('product'),
  withHandlers({
    changeQuantity: ({ _id, updateCart, setQuantity, setTotal, total, setErrors }) => e => {
      setErrors('')
      if (e.target.value >= 0 && e.target.value<=100) {
        setQuantity(e.target.value)
        updateCart(_id, e.target.value)
        .catch(errors => setErrors(errors))
      }
    },
    removeProduct: ({ _id, removeProduct, toggleShow }) => e => {
      toggleShow(false)
      setTimeout(() => removeProduct(_id), 1000)
    }
  })
)

export default enhance(BagProduct)
