import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import styles from '../../../dist/css/style'

const MoveUp = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames={{
      enter: styles.enter,
      enterActive: styles.enterActive,
      exit: styles.exit,
      exitActive: styles.exitActive
    }}>
    {children}
  </CSSTransition>
)

export default MoveUp
