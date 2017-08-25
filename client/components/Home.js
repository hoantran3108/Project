import React from 'react'
import { connect } from 'react-redux'
import ProductList from './product/ProductsList'
import ProductCategory from './product/ProductCategory'
import SidebarList from './sidebar/SidebarList'
import { Container } from 'semantic-ui-react'
import { productsSelector } from '../selectors/SelectedProducts'
import { fetchProducts } from '../actions/productAction'
import { addProductToCart } from '../actions/cartAction'
import FlashMessagesList from './flash/FlashMessagesList'
import { cartMessagesSelector, signupMessagesSelector, loginMessagesSelector } from '../selectors/SelectedFlashMessages'

const Home = (props) => (
  <Container>
    <FlashMessagesList messages={props.cartMessages} />
    <SidebarList {...props} />
    {props.location.state ? <ProductCategory {...props} /> : <ProductList {...props} />}
  </Container>
)

const mapStatetoProps = (state) => ({
  products: productsSelector(state),
  cartMessages: cartMessagesSelector(state)
})

export default connect(mapStatetoProps, { fetchProducts, addProductToCart })(Home)
