import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import transitions from '../../../dist/css/transitions'

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames={{
      enter: transitions.fadeEnter,
      enterActive: transitions.fadeEnterActive,
      exit: transitions.fadeExit,
      exitActive: transitions.fadeExitActive,
    }}>
    {children}
  </CSSTransition>
)

export default Fade
