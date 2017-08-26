import React from 'react'
import Product from './Product'
import List from '../common/List'
import { Card } from 'semantic-ui-react'

const ProductList = ({ products, ...rest }) => (
  <Card.Group itemsPerRow='four'>
    {products.map(List(Product, {...rest}))}
  </Card.Group>
)

export default ProductList
