import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { getCategories } from '../../actions/categoryAction'
import { Header, Icon } from 'semantic-ui-react'
import SideBar from './SideBar'
import List from '../common/List'
import sidebar from '../../../dist/css/sidebar'

const SidebarList = ({ categories }) => (
  <div className={sidebar.container}>
    <h3 className={sidebar.header}><Icon className='list' />Categories</h3>
    {categories && categories.map(List(SideBar))}
  </div>
)

const categorySelector = (state) => state.get('categories').toJS()

const mapStatetoProps = (state) => ({
  categories: categorySelector(state)
})

const enhance = compose(
  connect(mapStatetoProps)
)

export default enhance(SidebarList)
