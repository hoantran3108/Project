import React, { Component } from 'react'
<<<<<<< HEAD
import { compose, withState, withHandlers, lifecycle, branch, renderComponent } from 'recompose'
=======
>>>>>>> 00424e5c7680c5cd530e60c23c90a5967fc24b3d
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import SearchBar from './navbar/SearchBar'
import UserNav from './navbar/UserNav'
import GuestNav from './navbar/GuestNav'

<<<<<<< HEAD
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
    onNavigate: ({ setActiveItem }) => (e, { name }) => { setActiveItem(name) }
  })
)

export default enhance(Nav)
=======
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
>>>>>>> 00424e5c7680c5cd530e60c23c90a5967fc24b3d
