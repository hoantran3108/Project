import React from 'react'
import { compose, renderComponent, branch } from 'recompose'
import LoginModal from '../common/LoginModal'
import { Table, Modal, Button, Icon, Header } from 'semantic-ui-react'

const BagFooter = ({ openModalRemove, closeModalRemove, isModalRemoveOpen, removeProducts, total, redirectToShop, ...rest }) => (
  <Table.Footer fullWidth>
    <Table.Row>
      <Table.HeaderCell>
        <Modal trigger={<Button onClick={openModalRemove}>Remove All</Button>}
        onClose={closeModalRemove} open={isModalRemoveOpen} size='small'>
        <Header content='Are you sure you want to remove all products from cart?' />
        <Modal.Actions>
          <Button color='red' inverted onClick={closeModalRemove}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={removeProducts}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </Table.HeaderCell>
    <Table.HeaderCell colSpan='4'>
      <Button icon='shop' label={{ as: 'a', basic: true, content: 'Continue' }} labelPosition='right' onClick={redirectToShop} />
      {checkout({content: 'Check out', ...rest})}
    </Table.HeaderCell>
    <Table.HeaderCell>
      ${total}
    </Table.HeaderCell>
  </Table.Row>
</Table.Footer>
)

const isLogined = ({ isAuthenticated }) => isAuthenticated

const checkout = branch(
  isLogined,
  renderComponent(ButtonCheckout)
)(LoginModal)

const ButtonCheckout = ({ checkout }) => <Button floated='right' color='green' onClick={checkout}>Check out</Button>

export default BagFooter
