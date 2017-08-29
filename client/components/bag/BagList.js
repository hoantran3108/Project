import React, { Component } from 'react'
import { compose, withStateHandlers, withHandlers, branch, renderComponent, shouldUpdate, withProps } from 'recompose'
import BagProduct from './BagProduct'
import EmptyBag from './EmptyBag'
import BagHeader from './BagHeader'
import BagFooter from './BagFooter'
import { Container, Table } from 'semantic-ui-react'
import bag from 'CSS/bag'

const BagList = ({ productList, ...rest }) => (
    <Container className={bag.container}>
      <Table celled padded fixed>
        <BagHeader />
        {productList}
        <BagFooter {...rest} />
    </Table>
  </Container>
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
        openModalLogin: ({ isModalLoginOpen, removeAllMessages }) => () => ({
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
      checkout: ({ removeAllMessages, history }) => e => history.push('/checkout')
    }),
    EmptyBagWithNoProduct
  )

  export default enhance(BagList)
