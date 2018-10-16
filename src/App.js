import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Booths from './pages/Booths'

import AppLayout from './components/AppLayout'

import './App.css'

class App extends Component {
  render () {
    return (
      <AppLayout>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/booths' component={Booths} />
          </Switch>
        </BrowserRouter>
      </AppLayout>
    )
  }
}

export default App
