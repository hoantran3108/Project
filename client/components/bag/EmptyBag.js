import React from 'react'
import { Message, Button, Icon } from 'semantic-ui-react'

const EmptyBag = ({ redirectToShop }) => (
  <Message negative size='massive'>
    <Message.Header>Oops! There are no products in your bag. Please add some
      <Button animated='fade' floated='right' onClick={redirectToShop}>
        <Button.Content visible>
          <Icon name='shop' />
        </Button.Content>
        <Button.Content hidden>
          Shop
        </Button.Content>
      </Button>
    </Message.Header>
  </Message>
)

export default EmptyBag
