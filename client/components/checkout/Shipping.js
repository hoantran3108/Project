import React from 'react'
import { compose, withHandlers } from 'recompose'
import { Button } from 'semantic-ui-react'

const Shipping = ({ onSubmit }) => (
  <Button onClick={onSubmit} color='green'>Next</Button>
)

const enhance = compose(
  withHandlers({
    onSubmit: ({ setActiveItem, toggleProcess }) => () => {
      setActiveItem('billing'),
      toggleProcess('shipping')
    }
  })
)

export default enhance(Shipping)
