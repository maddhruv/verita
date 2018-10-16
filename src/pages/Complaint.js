import React from 'react'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'

import ComplaintController from '../controllers/CandidateComplaintController'

export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      c: {}
    }
  }
  componentWillMount () {
    ComplaintController.list(cb => {
      this.setState({ c: cb })
    })
  }
  render () {
    let s = []
    if (this.state.c) {
      for (var k in this.state.c) {
        s.push(k)
      }
    }
    return (
      <Paper className='container'>
        {s.map(e => <li>{e}</li>)}
      </Paper>
    )
  }
}
