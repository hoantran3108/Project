import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

<<<<<<< HEAD
const GuestNav = ({ activeItem, onNavigate }) => (
  <Menu.Menu>
    <Menu.Item as={Link} to='/signup' name='/signup' active={activeItem==='/signup'} onClick={onNavigate}>
      Sign up
    </Menu.Item>
    <Menu.Item as={Link} to='/login' name='/login' active={activeItem==='/login'} onClick={onNavigate}>
=======
const GuestNav = ({ activeItem, setActiveItem }) => (
  <Menu.Menu>
    <Menu.Item as={Link} to='/signup' name='/signup' active={activeItem==='/signup'} onClick={setActiveItem}>
      Sign up
    </Menu.Item>
    <Menu.Item as={Link} to='/login' name='/login' active={activeItem==='/login'} onClick={setActiveItem}>
>>>>>>> 00424e5c7680c5cd530e60c23c90a5967fc24b3d
      Log in
    </Menu.Item>
  </Menu.Menu>
)

export default GuestNav
