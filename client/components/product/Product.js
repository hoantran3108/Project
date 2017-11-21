import React from 'react'
import { compose, withHandlers, onlyUpdateForKeys } from 'recompose'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const Product = ({ _id, name, images, price, addToCart }) => (
  <Card>
    <Image as={Link} to={`/product/${_id}`} label={{ color: 'green', content: `$${price}`, ribbon: true }}
      src={images[0]} />
    <Card.Content>
      <Card.Header as={Link} to={`/product/${_id}`}>{name}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <Button.Group>
        <Button color='green' onClick={addToCart} icon='shop' content='Add to cart'  />
        <Button color='google plus' icon='like' content='Wishlist'  />
      </Button.Group>
    </Card.Content>
  </Card>
)


const enhance = compose(
  onlyUpdateForKeys('_id'),
  withHandlers({
    addToCart: ({ addProductToCart, _id }) => () => addProductToCart(_id)
  })
)

export default enhance(Product)
