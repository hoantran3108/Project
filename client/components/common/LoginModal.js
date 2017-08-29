import React from 'react'
import LoginPage from '../login/LoginPage'
import { Modal, Button } from 'semantic-ui-react'

const LoginModal = ({ openModalLogin, closeModalLogin, isModalLoginOpen, content }) => (
  <Modal
    trigger={<Button floated='right' color='green' onClick={openModalLogin}>{content}</Button>}
    onClose={closeModalLogin} open={isModalLoginOpen} size='small'>
    <Modal.Content>
      <LoginPage />
    </Modal.Content>
  </Modal>
)

export default LoginModal
