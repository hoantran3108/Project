import React from 'react'
import Product from './Product'
import renderList from '../common/renderList'
import { Card } from 'semantic-ui-react'

const ProductList = ({ products, ...rest }) => (
  <Card.Group itemsPerRow='four'>
    {products.map(renderList(Product, {...rest}))}
  </Card.Group>
)

export default ProductList
