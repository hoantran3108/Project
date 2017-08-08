import React, { Component } from 'react'
import renderField from '../common/renderField'
import { compose, withHandlers } from 'recompose'
import validate from '../../utils/validations/validateLogin'
import { Form, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form/immutable'

const LoginForm = ({ handleSubmit, onLogin, pristine, reset, submitting }) => (
  <Form onSubmit={handleSubmit(onLogin)} loading={submitting}>
    <Field name='username' component={renderField} label='Username' />
    <Field name='password' type='password' component={renderField} label='Password' />
    <Button primary disabled={pristine || submitting}>Log in</Button>
    <Button disabled={pristine || submitting} onClick={reset}>Clear Fields</Button>
  </Form>
)

const enhance = compose(
  reduxForm({
    form: 'loginForm',
    validate
  }),
  withHandlers({
    onLogin: ({ login, formValues, removeAllMessages, addFlashMessage }) => e => {
      removeAllMessages()
      login(formValues)
      .then(res => {
        addFlashMessage({
          type: 'success',
          text: 'Loged in successfully'
        })
      })
      .catch(errors => {
        addFlashMessage({
          type: 'error',
          text: errors.response.data.form
        })
      })
    }
  })
)

export default enhance(LoginForm)
