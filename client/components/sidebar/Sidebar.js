import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../../dist/css/style'

const Sidebar = ({ name, _id }) => (
  <NavLink to={{
    pathname: `/category/${name}`,
    state: { _id }}}
    className={styles.sidebarItem}
    activeClassName={styles.selected}>
    <span>{name}</span>
  </NavLink>
)

export default Sidebar
