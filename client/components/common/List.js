import React from 'react'

const List = (Comp, { ...rest }) => (props, i) => (
  <Comp key={props._id} {...props} {...rest} number={i+1} />
)

export default List
