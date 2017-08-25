import React from 'react'
import { compose, withHandlers } from 'recompose'
import { Form, Button } from 'semantic-ui-react'

const Shipping = ({ onSubmit }) => (
  <Button onClick={onSubmit} color='green'>Next</Button>
)

const enhance = compose(
  withHandlers({
    onSubmit: ({ setActiveItem, toggleProcess }) => event => {
      setActiveItem('billing'),
      toggleProcess('shipping')
    }
  })
)

export default enhance(Shipping)
