import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

import AppLayout from './components/AppLayout'

import './App.css'

class App extends Component {
  render () {
    return (
      <AppLayout>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </AppLayout>
    )
  }
}

export default App
