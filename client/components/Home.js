import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './product/ProductsList'
import { Container } from 'semantic-ui-react'
import { productsSelector } from '../selectors/SelectedProducts'

class Home extends Component {

  render() {
    return (
    <Container>
        <ProductList {...this.props}/>
    </Container>
    )
  }
}

const mapStatetoProps = (state) => ({
  products: productsSelector(state)
})

export default connect(mapStatetoProps)(Home)
