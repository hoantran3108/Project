import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { SelectedProducts, quantityByIdsSelector } from '../../selectors/SelectedProducts'
import CheckoutProduct from './CheckoutProduct'
import { Card } from 'semantic-ui-react'

class CheckoutList extends Component {
  render() {
    const products = _.map(this.props.products, product =>
      <CheckoutProduct key={product._id} product={product} quantityById={this.props.quantityByIds[product._id]}/>
    )
    return (
      <Card>
        {products}
      </Card>
    )
  }
}

const mapStatetoProps = (state) => ({
  products: SelectedProducts(state),
  quantityByIds: quantityByIdsSelector(state)
})

export default connect(mapStatetoProps)(CheckoutList)
