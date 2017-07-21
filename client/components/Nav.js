import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/loginAction'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'

class Nav extends Component {
  constructor() {
    super()
    this.state = { activeItem: 'home' }
  }

  onClick = (e, { name }) => {
    this.setState({ activeItem: name})
  }

  logout = (e) => {
    e.preventDefault()
    this.props.logout()
  }

  render(){
    const user = (
      <Menu.Menu position='right'>
        <Dropdown item text='Account'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item onClick={this.logout}>Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Menu.Menu>
    )
    const { activeItem } = this.state
    const guest = (
      <Menu.Menu position='right'>
        <Menu.Item as={Link} to='/signup' name='signup' active={activeItem==='signup'} onClick={this.onClick}>Sign up</Menu.Item>
        <Menu.Item as={Link} to='/login' name='login' active={activeItem==='login'} onClick={this.onClick}>Log in</Menu.Item>
      </Menu.Menu>
    )

    const { isAuthenticated } = this.props.user
    return(
      <Menu secondary>
        <Menu.Item as={Link} to='/' name='home' active={activeItem==='home'} onClick={this.onClick}>Home</Menu.Item>
        { isAuthenticated ? user : guest }
      </Menu>
    )
  }
}

const mapStatetoProps = (state) => ({
  user: state.users
})

export default connect(mapStatetoProps, { logout })(Nav)
