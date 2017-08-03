import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFlashMessage } from '../actions/flashMessages'
import PropTypes from 'prop-types'
import { authenticateSelector } from '../selectors/SelectedUser'

const requireAuth = (ComposedComponent) => {
  class Authenticate extends Component {

    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'Log in to continue the process'
        })
        this.props.history.push('/login')
      }
    }

    componentWillUpdate(nextProps) {
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

  return connect(mapStatetoProps, { addFlashMessage })(Authenticate)
}

export default requireAuth
