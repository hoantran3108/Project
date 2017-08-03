import { SET_ACTIVE_ITEM, TOGGLE_COMPLETED_PROCESS } from './types'

export const setActiveItem = (step) => ({
  type: SET_ACTIVE_ITEM,
  step
})

export const toggleProcess = (step) => ({
  type: TOGGLE_COMPLETED_PROCESS,
  step
})
