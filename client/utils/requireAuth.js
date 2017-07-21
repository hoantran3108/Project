import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFlashMessage } from '../actions/flashMessages'
import PropTypes from 'prop-types'

const requireAuth = (ComposedComponent) => {
  class Authenticate extends Component {

  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.addFlashMessage({
        type: 'error',
        text: 'Log in to continue the process'
      })
      this.context.router.history.push('/')
    }
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isAuthenticated) {
      this.context.router.history.push('/')
    }
  }
  render() {
    return (
      <ComposedComponent {...this.props} />
      )
  }
}
const mapStatetoProps = (state) => ({
    isAuthenticated: state.users.isAuthenticated
})

Authenticate.contextTypes = {
  router: PropTypes.object.isRequired
}

return connect(mapStatetoProps, { addFlashMessage })(Authenticate)
}

export default requireAuth
