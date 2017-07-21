import React, { Component } from 'react'
import Nav from './Nav'
import Main from './Main'
import FlashMessagesList from './flash/FlashMessagesList'

class App extends Component {
  render() {
     return (
      <div className="ui container">
        <Nav />
        <FlashMessagesList />
        <Main />
      </div>
    )
  }
}

export default App
