import React from 'react'
import { compose, withHandlers } from 'recompose'
import { Field, reduxForm } from 'redux-form/immutable'
import renderField from '../common/renderField'
import validate from '../../utils/validations/validateBilling'
import { Form, Button } from 'semantic-ui-react'

const Billing = ({ handleSubmit, onSubmit, goPrevious, pristine, submitting, user }) => (
  <Form onSubmit={handleSubmit(onSubmit)} loading={submitting}>
    <Form.Group widths='equal'>
      <Field name='firstname' value={user.firstname} component={renderField} label='Firstname*' />
      <Field name='lastname' value={user.lastname} component={renderField} label='Lastname*' />
    </Form.Group>
    <Form.Group widths='equal'>
      <Field name='telephone' value={user.telephone} type='number' component={renderField} label='Telephone' />
      <Field name='address' value={user.address} component={renderField} label='Address' />
    </Form.Group>
    <Form.Group widths='equal'>
      <Field name='email' value={user.email} type='email' component={renderField} label='Email*' />
    </Form.Group>
    <Form.Group>
      <Button onClick={goPrevious}>Back</Button>
      <Button primary disabled={pristine || submitting}>Continue</Button>
    </Form.Group>
  </Form>
)

const enhance = compose(
  reduxForm({
    form: 'billingForm',
    enableReinitialize: true,
    validate
  }),
  withHandlers({
    onSubmit: ({ setActiveItem, toggleProcess }) => (e) => {
      setActiveItem('payment')
      toggleProcess('billing')
    },
    goPrevious: ({ setActiveItem }) => (e) => {
      setActiveItem('shipping')
    }
  })
)

export default enhance(Billing)
