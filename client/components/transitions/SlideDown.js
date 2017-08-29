import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import transitions from 'CSS/transitions'

const SlideDown = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames={{
      enter: transitions.slideDownEnter,
      enterActive: transitions.slideDownEnterActive,
      exit: transitions.slideDownExit,
      exitActive: transitions.slideDownExitActive,
    }}>
    {children}
  </CSSTransition>
)

export default SlideDown
