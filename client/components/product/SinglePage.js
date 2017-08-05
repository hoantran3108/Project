import React, { Component } from 'react'
import isEmpty from 'lodash/isEmpty'
import { connect } from 'react-redux'
import { Grid, Container, Message } from 'semantic-ui-react'
import { productsSelector } from '../../selectors/SelectedProducts'
import { singleProduct } from '../../actions/productAction'

class SinglePage extends Component {

  componentDidMount = () => {
    const { singleProduct, match } = this.props
    singleProduct(match.params.id)
  }

  render() {
    const { match, products } = this.props
    const product = _.filter(products, product =>
      product._id===match.params.id)

      const singleProduct = (!isEmpty(product) ?
      <Grid>
        <Grid.Column width={4}>
          {product[0]._id}
        </Grid.Column>
        <Grid.Column width={9}>
          {product[0].name}
        </Grid.Column>
      </Grid> : null)

      const notFound =
      <Message negative size='massive'>
        <Message.Header>Oops! Product not found.</Message.Header>
      </Message>
      return (
        <Container>
          {isEmpty(product) ? notFound :singleProduct}
        </Container>
      )
    }
  }

  const mapStatetoProps = (state) => ({
    products: productsSelector(state)
  })

  export default connect(mapStatetoProps, { singleProduct })(SinglePage)
