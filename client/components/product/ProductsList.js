import React from 'react'
import Product from './Product'
import { Card } from 'semantic-ui-react'

const ProductList = ({ products, ...rest }) => (
  <Card.Group itemsPerRow='three'>
    {products.map(product => <Product key={product._id} {...product} {...rest} />)}
  </Card.Group>
)

export default ProductList
