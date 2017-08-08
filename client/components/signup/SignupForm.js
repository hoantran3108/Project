import React, { Component } from 'react'
import { compose, withHandlers } from 'recompose'
import { reduxForm, Field } from 'redux-form/immutable'
import renderField from '../common/renderField'
import validate from '../../utils/validations/validateSignup'
import { Form, Button } from 'semantic-ui-react'

const SignupForm = ({ handleSubmit, userSignup, pristine, reset, submitting }) => (
  <Form onSubmit={handleSubmit(userSignup)} loading={submitting}>
    <Form.Group widths='equal'>
      <Field name='firstname' component={renderField} label='Firstname*' />
      <Field name='lastname' component={renderField} label='Lastname*' />
    </Form.Group>
    <Form.Group widths='equal'>
      <Field name='username' component={renderField} label='Username*' />
      <Field name='email' type='email' component={renderField} label='Email*' />
    </Form.Group>
    <Form.Group widths='equal'>
      <Field name='telephone' type='number' component={renderField} label='Telephone' />
      <Field name='address' component={renderField} label='Address' />
    </Form.Group>
    <Form.Group widths='equal'>
      <Field name='password' tyep='password' component={renderField} label='Password*' />
      <Field name='passwordconfirmation' tyep='password' component={renderField} label='Password Confirmation*' />
    </Form.Group>
    <Form.Group>
      <Button primary disabled={pristine || submitting}>Sign up</Button>
      <Button disabled={pristine || submitting} onClick={reset}>Clear Fields</Button>
    </Form.Group>
  </Form>
)

const enhance = compose(
  reduxForm({
    form: 'signupForm',
    validate
  }),
  withHandlers({
    onSignup: ({ userSignup, removeAllMessages, addFlashMessage, formValues }) => e => {
      removeAllMessages()
      userSignup(formValues)
      .then(() => {
        addFlashMessage({
          type: 'success',
          text: 'Signed up successfully'
        })
      })
      .catch(errors => {
        addFlashMessage({
          type: 'error',
          text: (errors.response.data.form || errors)
        })
      })
    }
  })
)

export default enhance(SignupForm)
