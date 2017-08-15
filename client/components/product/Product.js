import React from 'react'
import { compose, pure, withHandlers, flattenProp } from 'recompose'
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
      <Button color='green' onClick={addToCart} icon='shop' content='Add to cart' compact />
      {/* <Button color='google plus' icon='like' content='Wish List' compact /> */}
    </Card.Content>
  </Card>
)

const enhance = compose(
  pure,
  flattenProp('product'),
  withHandlers({
    addToCart: ({ addProductToCart, _id }) => e => addProductToCart(_id)
  })
)

export default enhance(Product)
