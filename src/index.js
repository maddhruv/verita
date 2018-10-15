import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1B9CFC'
    },
    secondary: {
      main: '#fed330'
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
