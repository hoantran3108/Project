import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { Icon } from 'semantic-ui-react'
import SideBar from './SideBar'
import renderList from '../common/renderList'
import sidebar from 'CSS/sidebar'

const SidebarList = ({ categories, ...rest }) => (
  <div className={sidebar.container}>
    <h3 className={sidebar.header}><Icon className='list' />Categories</h3>
    {categories && categories.map(renderList(SideBar, { ...rest }))}
  </div>
)

const categorySelector = (state) => state.get('categories').toJS()

const mapStatetoProps = (state) => ({
  categories: categorySelector(state)
})

const enhance = compose(
  withRouter,
  connect(mapStatetoProps)
)

export default enhance(SidebarList)
