import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import SearchBar from './navbar/SearchBar'
import UserNav from './navbar/UserNav'
import GuestNav from './navbar/GuestNav'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: props.location.pathname }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ activeItem: nextProps.location.pathname})
  }

  onClick = (e, { name }) => {
    this.setState({ activeItem: name})
  }

  render() {
    const { activeItem } = this.state
    const { isAuthenticated } = this.props

    return (
      <Menu secondary>
        <Menu.Item as={Link} to='/' name='/' active={activeItem==='/'} onClick={this.onClick}>Home</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <SearchBar {...this.props}/>
          </Menu.Item>
          <Menu.Item as={Link} to='/shoppingbag' name='/shoppingbag' active={activeItem==='/shoppingbag'} onClick={this.onClick}><Icon name='shopping bag' /></Menu.Item>
        </Menu.Menu>
        {isAuthenticated ? <UserNav {...this.props} {...this.state} />
        : <GuestNav setActiveItem={this.onClick} {...this.props} {...this.state} />}
      </Menu>
    )
  }
}

export default Nav
