import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import Header from './header/Header'

class App extends Component {
  constructor () {
    super()

    this.state = {
      currentUser: null
    }
  }

  render () {
    return (
      <React.Fragment>
        <Route path='/' render={() => (
          <Header user={this.state.currentUser} />
        )} />
      </React.Fragment>
    )
  }
}

export default App
