import React from 'react'
import { NavLink } from 'react-router-dom'
import sidebar from '../../../dist/css/sidebar'

const Sidebar = ({ name, _id }) => (
  <NavLink to={{
    pathname: `/category/${name}`,
    state: { _id }}}
    className={sidebar.item}
    activeClassName={sidebar.selected}>
    <span>{name}</span>
  </NavLink>
)

export default Sidebar
