import { createSelector } from 'reselect'

export const authenticateSelector = (state) => state.get('user').toJS().isAuthenticated
export const userSelector = (state) => state.getIn(['user','user']).toJS()
