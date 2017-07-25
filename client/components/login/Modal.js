import React, { Component } from 'react'
import LoginPage from './LoginPage'
import { Container } from 'semantic-ui-react'

class Modal extends Component {

  back = (e) => {
    e.stopPropagation()
    this.props.history.goBack()
  }

  render() {
    return (
      <Container>
        <div
        onClick={this.back}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.15)'
        }}
      >
        <div className='modal' style={{
        position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444'
        }}>
        <LoginPage />
      </div>
    </div>
      </Container>
    )
  }
}

export default Modal
