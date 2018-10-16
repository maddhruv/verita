import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

import CandidateController from '../controllers/CandidateController'
import logos from '../helpers/parties'

export default class Candidate extends React.Component {
  constructor () {
    super()
    this.state = {
      candidate: {
        name: null
      }
    }
  }
  componentWillMount () {
    CandidateController.read(this.props.match.params.username, (data) => {
      this.setState({ candidate: data })
    })
  }
  render () {
    let container = <CircularProgress className='loader' />
    let logo = null
    if (this.state.candidate.name) {
      switch (this.state.candidate.party) {
        case 'BJP': logo = <img src={logos.BJP} className='logo' />
          break

        case 'Congress': logo = <img src={logos.Congress} className='logo' />
          break

        case 'Others': logo = <img src={logos.Others} className='logo' />
          break

        default: logo = null
      }
      container = (
        <Grid container spacing={8}>
          <Grid item sm={8} md={8} lg={8}>
            <Typography variant='h2'>
              {this.state.candidate.name}
            </Typography>
            <span className='party'>
              {logo} {this.state.candidate.party}
            </span>
          </Grid>
          <Grid item sm={4} md={4} lg={4}>
            <img src={this.state.candidate.image} className='avatar' />
          </Grid>
        </Grid>
      )
    }
    return (
      <Paper className='container'>
        {container}
      </Paper>
    )
  }
}
