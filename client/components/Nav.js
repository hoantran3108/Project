import React, { Component } from 'react'
import { compose, withState, withHandlers, lifecycle, branch, renderComponent } from 'recompose'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import SearchBar from './navbar/SearchBar'
import UserNav from './navbar/UserNav'
import GuestNav from './navbar/GuestNav'

const Nav = ({ activeItem, onNavigate, isAuthenticated, ...rest }) => (
  <Menu secondary>
    <Menu.Item as={Link} to='/' name='/' active={activeItem==='/'} onClick={onNavigate}>Home</Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <SearchBar {...rest} />
      </Menu.Item>
      <Menu.Item as={Link} to='/shoppingbag' name='/shoppingbag' active={activeItem==='/shoppingbag'} onClick={onNavigate}><Icon name='shopping bag' /></Menu.Item>
    </Menu.Menu>
    {guestOrUser({ activeItem, onNavigate, isAuthenticated, ...rest })}
  </Menu>
)

const isAuthenticated = ({ isAuthenticated }) => isAuthenticated

const guestOrUser = branch(
  isAuthenticated,
  renderComponent(UserNav)
)(GuestNav)

const enhance = compose(
  withState('activeItem', 'setActiveItem', props => props.location.pathname),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props.location.pathname !== nextProps.location.pathname) {
        this.props.setActiveItem(nextProps.location.pathname)
      }
    }
  }),
  withHandlers({
    onNavigate: ({ setActiveItem }) => (e, { name }) => setActiveItem(name)
  })
)

export default enhance(Nav)
