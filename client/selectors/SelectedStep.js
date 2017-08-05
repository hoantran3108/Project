export const activeItemSelector = (state) => state.get('step').activeItem

export const isCompletedSelector = (state) => state.get('step').isCompleted.toJS()
