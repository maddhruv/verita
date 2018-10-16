import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Booths from './pages/Booths'
import Booth from './pages/Booth'
import Candidate from './pages/Candidate'
import Dashboard from './pages/Dashboard'

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
            <Route path='/booth/:id' render={props => <Booth {...props} />} />
            <Route path='/candidate/:username' render={props => <Candidate {...props} />} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </AppLayout>
    )
  }
}

export default App
