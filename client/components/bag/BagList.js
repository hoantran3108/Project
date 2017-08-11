import React, { Component } from 'react'
import { compose, withState, withStateHandlers, withHandlers, flattenProp, branch, renderComponent, shouldUpdate, withProps } from 'recompose'
import Transition from 'react-transition-group/Transition'
import BagProduct from './BagProduct'
import EmptyBag from './EmptyBag'
import LoginPage from '../login/LoginPage'
import { Container, Table, Button, Icon, Header, Modal } from 'semantic-ui-react'

const BagList = ({ productList, quantityByIds, removeProducts, checkout, redirectToShop, total,
  openModalRemove, closeModalRemove, isModalRemoveOpen, isAuthenticated,
  openModalLogin, closeModalLogin, isModalLoginOpen,  ...rest}) => (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Remove</Table.HeaderCell>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Unit Price</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Subtotal</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {productList}
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell>
            <Modal trigger={<Button onClick={openModalRemove}>Remove All</Button>}
            onClose={closeModalRemove} open={isModalRemoveOpen} size='small'>
            <Header content='Are you sure you want to remove all products from cart?' />
            <Modal.Actions>
              <Button color='red' inverted onClick={closeModalRemove}>
                <Icon name='remove' /> No
              </Button>
              <Button color='green' inverted onClick={removeProducts}>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Table.HeaderCell>
        <Table.HeaderCell colSpan='4'>
          <Button icon='shop' label={{ as: 'a', basic: true, content: 'Continue' }} labelPosition='right' onClick={redirectToShop} />
          {isAuthenticated ? <Button floated='right' color='green' onClick={checkout}>Check out</Button> :
          <Modal trigger={<Button floated='right' color='green' onClick={openModalLogin}>Check out</Button>}
          onClose={closeModalLogin} open={isModalLoginOpen} size='small'>
          <Modal.Content>
            <LoginPage />
          </Modal.Content>
        </Modal>}
      </Table.HeaderCell>
      <Table.HeaderCell>
        ${total}
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
  withStateHandlers(
    { isModalRemoveOpen: false,
      isModalLoginOpen: false },
      {
        openModalRemove: ({ isModalRemoveOpen }) => () => ({
          isModalRemoveOpen: true
        }),
        closeModalRemove: ({ isModalRemoveOpen }) => () => ({
          isModalRemoveOpen: false
        }),
        openModalLogin: ({ isModalLoginOpen }) => () => ({
          isModalLoginOpen: true
        }),
        closeModalLogin: ({ isModalLoginOpen }) => () => ({
          isModalLoginOpen: false
        })
      }
    ),
    shouldUpdate((prevProps, nextProps) => {
      if(prevProps.isAuthenticated !== nextProps.isAuthenticated && prevProps.isModalLoginOpen !== nextProps.isModalLoginOpen) {
        nextProps.closeModalLogin()
        return true
      }
      return true
    }),
    withProps(props => ({
      productList: props.products.map(product =>
        <BagProduct
          key={product._id}
          quantityById={props.quantityByIds[product._id]}
          {...props}
          {...product}
        />)
      })
    ),
    withHandlers({
      redirectToShop: ({ history }) => e => history.push('/'),
      checkout: ({ removeAllMessages, history }) => e => {
        removeAllMessages()
        history.push('/checkout')
      },
      removeProducts: ({ removeProducts }) => e => removeProducts()
    }),
    EmptyBagWithNoProduct
  )

  export default enhance(BagList)
