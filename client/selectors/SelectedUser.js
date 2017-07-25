import { createSelector } from 'reselect'
import _ from 'lodash'

export const authenticateSelector = (state) => state.user.isAuthenticated
