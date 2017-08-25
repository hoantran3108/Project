import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import '../../../dist/css/style'

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames='fade'>
    {children}
 </CSSTransition>
)

export default Fade
