import React from 'react'
import { compose, withState, withHandlers, branch, renderComponent  } from 'recompose'
import Product from './Product'
import Spinner from '../common/Spinner'
import { Card, Button, Container } from 'semantic-ui-react'

const ProductList = ({ products, isActivated, onLoad, ...rest }) => (
  <Container>
    <Card.Group>
      {products.map(product => <Product key={product._id} {...product} {...rest} />)}
    </Card.Group>
    {isActivated ? <Button onClick={onLoad}>Load more</Button> : null}
  </Container>
)

const isLoading = ({ isLoading }) => isLoading

const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
)

const enhance = compose(
  withState('isLoading', 'toggleLoading', false),
  withState('isActivated', 'toggleActive', true),
  withHandlers({
    onLoad: ({ fetchProducts, products, toggleLoading, toggleActive }) => e => {
      toggleLoading(true)
      fetchProducts(products.length)
      .then(res => {
        toggleLoading(false)
        if (res.data.products.length<3) {
          toggleActive(false)
        }
      })
      .catch(errors => { throw new Error(errors) })
    }
  }),
  withSpinnerWhileLoading
)

export default enhance(ProductList)
