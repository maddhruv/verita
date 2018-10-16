import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1C1C1C'
    },
    secondary: {
      main: '#e74c3c'
    }
  }
})

function Main () {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))

serviceWorker.unregister()
