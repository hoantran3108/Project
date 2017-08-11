import React from 'react'
import { compose, pure, withHandlers, flattenProp } from 'recompose'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import styles from '../../../dist/css/style.css'

const Product = ({ _id, name, images, price, addToCart }) => (
  <Card>
    <Image as={Link} to={`/product/${_id}`} label={{ color: 'green', content: `$${price}`, ribbon: true }} src={images[0]} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
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
