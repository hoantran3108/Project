import React from 'react'
import renderField from '../common/renderField'
import { compose, withHandlers } from 'recompose'
import validate from '../../utils/validations/validateLogin'
import { Form, Button, Icon } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form/immutable'

const LoginForm = ({ handleSubmit, onLogin, pristine, reset, submitting, loginFacebook, loginGoogle }) => (
  <Form onSubmit={handleSubmit(onLogin)} loading={submitting}>
    <Field name='username' component={renderField} label='Username' />
    <Field name='password' type='password' component={renderField} label='Password' />
    <Button primary disabled={pristine || submitting}>Log in</Button>
    <Button disabled={pristine || submitting} onClick={reset}>Clear Fields</Button>
    <Button color='facebook' onClick={loginFacebook}><Icon name='facebook' />Continue with Facebook</Button>
    <Button color='google plus' onClick={loginGoogle}><Icon name='google' />Continue with Google</Button>
  </Form>
)

const enhance = compose(
  reduxForm({
    form: 'loginForm',
    validate
  }),
  withHandlers({
    onLogin: ({ login, formValues }) => e => login(formValues),
    loginFacebook: () => e => window.location = 'http://localhost:3000/api/users/auth/facebook'
  })
)

export default enhance(LoginForm)
