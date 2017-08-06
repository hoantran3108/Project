import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

const UserNav = ({ logout }) => (
  <Menu.Menu>
    <Dropdown item text='Account'>
      <Dropdown.Menu>
        <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Menu>
)

export default UserNav
