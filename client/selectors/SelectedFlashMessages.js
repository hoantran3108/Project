export const cartMessagesSelector = (state) => state.get('flashMessages').toJS().cart
export const signupMessagesSelector = (state) => state.get('flashMessages').toJS().signup
export const loginMessagesSelector = (state) => state.get('flashMessages').toJS().login
