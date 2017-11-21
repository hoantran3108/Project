import React from 'react'
import { connect } from 'react-redux'
import { compose, branch, renderComponent } from 'recompose'
import ProductList from './product/ProductsList'
import BannerList from './banner/BannerList'
import ProductCategory from './product/ProductCategory'
import SidebarList from './sidebar/SidebarList'
import { Container } from 'semantic-ui-react'
import { productsSelector } from '../selectors/SelectedProducts'
import { fetchProducts } from '../actions/productAction'
import { addProductToCart } from '../actions/cartAction'
import FlashMessagesList from './flash/FlashMessagesList'
import { cartMessagesSelector } from '../selectors/SelectedFlashMessages'
import styles from 'CSS/style'

const Home = (props) => (
  <Container>
    <Container className={styles.container}>
      <SidebarList {...props} />
      <BannerList />
    </Container>
    <FlashMessagesList messages={props.cartMessages} />
    {categoryOrAll({...props})}
  </Container>
)

const isCategoryIdExisted = ({ location }) => location.state

const categoryOrAll = branch(
  isCategoryIdExisted,
  renderComponent(ProductCategory)
)(ProductList)

const mapStatetoProps = (state) => ({
  products: productsSelector(state),
  cartMessages: cartMessagesSelector(state)
})

const enhance = compose(
  connect(mapStatetoProps, { fetchProducts, addProductToCart })
)

export default enhance(Home)
