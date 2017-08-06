import React from 'react'
import { compose, pure, withHandlers, flattenProp } from 'recompose'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const Product = ({ name, addToCart }) => (
  <Card>
    <Card.Header>{name}</Card.Header>
    <Card.Content extra>
      <Button color='green' onClick={addToCart}><Icon name='shop' />Add to cart</Button>
    </Card.Content>
  </Card>
)

const enhance = compose(
  pure,
  flattenProp('product'),
  withHandlers({
    addToCart: ({ addProductToCart, addFlashMessage, removeAllMessages, _id }) => e => {
      addProductToCart(_id)
      removeAllMessages()
      addFlashMessage({
        type: 'success',
        text: 'Product added to cart'
      })
    }
  })
)

export default enhance(Product)
