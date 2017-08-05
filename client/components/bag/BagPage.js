import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'
import { removeProducts } from '../../actions/cartAction'
import { Container } from 'semantic-ui-react'
import BagList from './BagList'

const BagPage = (props) => (
  <Container>
    <BagList {...props}/>
  </Container>
)

const enhance = compose(
  withRouter,
  connect(null,{ removeProducts }),
  withHandlers({
    removeProducts: ({ removeProducts }) => event => removeProducts()
  })
)

export default enhance(BagPage)
