import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default class AppLayout extends React.Component {
  render (props) {
    return (
      <>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography className='title'>
              Verita
            </Typography>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </>
    )
  }
}
