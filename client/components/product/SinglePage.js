import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Grid, Container, Message } from 'semantic-ui-react'
import { productsSelector } from '../../selectors/SelectedProducts'

class SinglePage extends Component {

  render() {
    const { match, products } = this.props
    const product = _.filter(products, product =>
      product._id===match.params.id)

      const singleProduct =
      <Grid>
        <Grid.Column width={4}>
          {product[0]._id}
        </Grid.Column>
        <Grid.Column width={9}>
          {product[0].name}
        </Grid.Column>
      </Grid>

      const notFound =
      <Message negative size='massive'>
        <Message.Header>Oops! Product not found.</Message.Header>
      </Message>
      return (
        <Container>
          {_.isEmpty(product) ? notFound :singleProduct}
        </Container>
      )
    }
  }

  const mapStatetoProps = (state) => ({
    products: productsSelector(state)
  })

  export default connect(mapStatetoProps)(SinglePage)
