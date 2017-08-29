import React from 'react'

const renderList = (Comp, { ...rest }) => (props, i) => (
  <Comp key={props._id} {...props} {...rest} number={i+1} />
)

export default renderList
