import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { removeProducts } from '../../actions/cartAction'
import { Container } from 'semantic-ui-react'
import BagList from './BagList'

class BagPage extends Component {
  render() {
    const { removeProducts } = this.props
    return (
      <Container>
        <BagList removeProducts={() => removeProducts()} {...this.props}/>
      </Container>
    )
  }
}

export default withRouter(connect(null,{ removeProducts })(BagPage))
