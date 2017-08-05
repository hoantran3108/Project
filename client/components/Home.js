import React from 'react'
import { connect } from 'react-redux'
import ProductList from './product/ProductsList'
import { Container } from 'semantic-ui-react'
import { productsSelector } from '../selectors/SelectedProducts'

const Home = (props) => (
  <Container>
      <ProductList {...props}/>
  </Container>
)

const mapStatetoProps = (state) => ({
  products: productsSelector(state)
})

export default connect(mapStatetoProps)(Home)
