import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticateSelector } from '../selectors/SelectedUser'

const requireAuth = (ComposedComponent) => {
  class Authenticate extends Component {

    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login')
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  const mapStatetoProps = (state) => ({
    isAuthenticated: authenticateSelector(state)
  })

  return connect(mapStatetoProps)(Authenticate)
}

export default requireAuth
