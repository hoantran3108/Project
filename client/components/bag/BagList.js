import React, { Component } from 'react'
import _ from 'lodash'
import BagProduct from './BagProduct'
import { compose, withState, withHandlers, flattenProp, branch, renderComponent, shouldUpdate } from 'recompose'
import EmptyBag from './EmptyBag'
import { Container, Table, Button, Icon, Header, Modal } from 'semantic-ui-react'

const BagList = ({ products, quantityByIds, removeProducts, checkout, redirectToShop, total, ...rest}) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Remove</Table.HeaderCell>
        <Table.HeaderCell>Image</Table.HeaderCell>
        <Table.HeaderCell>Product Name</Table.HeaderCell>
        <Table.HeaderCell>Unit Price</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>Subtotal</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    {products.map(product =>
      <BagProduct
        key={product._id}
        quantityById={quantityByIds[product._id]}
        {...rest}
        {...product}
      />)}
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell>
            <Modal trigger={<Button>Remove All</Button>} size='small'>
            <Header content='Are you sure you want to remove all products from cart?' />
            <Modal.Actions>
              <Button color='red' inverted>
                <Icon name='remove' /> No
              </Button>
              <Button color='green' inverted onClick={removeProducts}>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Table.HeaderCell>
        <Table.HeaderCell colSpan='4'>
          <Button
            floated='right'
            color='green'
            onClick={checkout}
            >Check out
          </Button>
          <Button
            icon='shop'
            label={{ as: 'a', basic: true, content: 'Continue' }}
            labelPosition='right'
            onClick={redirectToShop}
          />
        </Table.HeaderCell>
        <Table.HeaderCell>
          {total}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

const isEmpty = ({ products }) => products.length===0

const EmptyBagWithNoProduct = branch(
  isEmpty,
  renderComponent(EmptyBag)
)

const enhance = compose(
  shouldUpdate((prevProps, nextProps) => {
    if (prevProps.total !== nextProps.total) return true
    return false
  }),
  withHandlers({
    redirectToShop: ({ history }) => e => history.push('/'),
    checkout: ({ removeAllMessages, history }) => e => {
      removeAllMessages()
      history.push('/checkout')
    },
    removeProducts: ({ removeProducts }) => event => removeProducts()
  }),
  EmptyBagWithNoProduct
)

export default enhance(BagList)
