import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const GuestNav = ({ activeItem, onNavigate }) => (
  <Menu.Menu>
    <Menu.Item as={Link} to='/signup' name='/signup' active={activeItem==='/signup'} onClick={onNavigate}>
      Sign up
    </Menu.Item>
    <Menu.Item as={Link} to='/login' name='/login' active={activeItem==='/login'} onClick={onNavigate}>
      Log in
    </Menu.Item>
  </Menu.Menu>
)

export default GuestNav
