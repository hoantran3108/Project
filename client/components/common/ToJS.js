import React, { Component } from 'react'
import { Iterable } from 'immutable'

const ToJS = (WrappedComponent) => {
  return class ImmutableWrapper extends Component {
    constructor(props) {
      super(props)
      this.newProps = this.updateNewProps(this.props)
    }

    updateNewProps = (currentProps) => {
      const objecEntries = Object.entries(currentProps)
      return objecEntries.reduce((newProps, entry) => {
        newProps[entry[0]] = Iterable.isIterable(entry[1]) ? entry[1].toJS() : entry[1]
        return newProps
      }, {})
    }

    componentWillReceiveProps(nextProps) {
      this.newProps = this.updateNewProps(nextProps)
    }

    render() {
      return (
        <WrappedComponent
          {...this.newProps}
        />
      )
    }
  }
}

export default ToJS
