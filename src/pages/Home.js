import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

export default class Home extends React.Component {
  render () {
    return (
      <Paper className='container'>
        <a href='/booths'>
          <Button variant='contained' color='primary' className='button'>
            Booths
          </Button>
        </a>
        <a href='/dashboard'>
          <Button variant='contained' color='primary' className='button'>
            Dashboard
          </Button>
        </a>
      </Paper>
    )
  }
}
