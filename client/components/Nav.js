import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon, Button, Input } from 'semantic-ui-react'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: props.location.pathname }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ activeItem: nextProps.location.pathname })
  }
  
  onClick = (e, { name }) => {
    this.setState({ activeItem: name})
  }

  render() {
    const { activeItem } = this.state
    const cart = <Menu.Item
      as={Link}
      to='/shoppingbag'
      name='/shoppingbag'
      active={activeItem==='/shoppingbag'}
      onClick={this.onClick}>
      <Icon name='shopping bag' />
    </Menu.Item>

    const user = (
      <Menu.Menu position='right'>
        {cart}
        <Dropdown item text='Account'>
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Russian</Dropdown.Item>
            <Dropdown.Item onClick={this.props.logout}>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    )

    const guest = (
      <Menu.Menu position='right'>
        {cart}
        <Menu.Item
          as={Link}
          to='/signup'
          name='/signup'
          active={activeItem==='/signup'}
          onClick={this.onClick}>
          Sign up
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={{
            pathname: '/login',
            state: { modal: true }
          }}
          name='/login'
          active={activeItem==='/login'}
          onClick={this.onClick}>
          Log in
        </Menu.Item>
      </Menu.Menu>
    )

    return(
      <Menu secondary>
        <Menu.Item
          as={Link}
          to='/'
          name='/'
          active={activeItem==='/'}
          onClick={this.onClick}>
          Home
        </Menu.Item>
        {this.props.isAuthenticated ? user : guest}
      </Menu>
    )
  }
}

export default Nav
