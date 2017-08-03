export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state',serializedState)
  } catch (err) {
    //ignore err so that the app doesn't crash
  }
}

export const saveCart = (state) => {
  try {
    const serializedCart = JSON.stringify(state)
    localStorage.setItem('cart',serializedCart)
  } catch (err) {

  }
}

export const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem('cart')
    if (serializedCart === null) {
      return undefined
    }
    return JSON.parse(serializedCart)
  } catch (err) {
    return undefined
  }
}
