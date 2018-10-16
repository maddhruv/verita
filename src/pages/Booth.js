import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

// import { GoogleMap } from 'react-google-maps'

import BoothComplaint from '../components/BoothComplaint'
import CandidateComplaint from '../components/CandidateComplaint'
import BoothController from '../controllers/BoothController'
import CandidateController from '../controllers/CandidateController'
import BoothComplaintController from '../controllers/BoothComplaintController'
import CandidateComplaintController from '../controllers/CandidateComplaintController'

const aadharId = '6654654654'

export default class Booth extends React.Component {
  constructor () {
    super()
    this.state = {
      booth: {
        name: null,
        address: null,
        city: null
      },
      boothOpen: false,
      candidateOpen: false,
      boothComplaint: null,
      candidateComplaint: null,
      can: []
    }
    this.triggerBooth = this.triggerBooth.bind(this)
    this.onBoothChange = this.onBoothChange.bind(this)
    this.boothSubmit = this.boothSubmit.bind(this)
    this.triggerCandidate = this.triggerCandidate.bind(this)
    this.onCandidateChange = this.onCandidateChange.bind(this)
    this.candidateSubmit = this.candidateSubmit.bind(this)
  }

  componentWillMount () {
    BoothController.read(this.props.match.params.id, (data) => {
      this.setState({ booth: data })
      // const can = []
      // data.candidates.forEach(candidate => {
      //   CandidateController.read(candidate, c => {
      //     c.username = candidate
      //     can.push(c)
      //     this.setState({ can })
      //   })
      // })
    })
  }

  triggerBooth () {
    this.setState({
      boothOpen: !this.state.boothOpen
    })
  }

  onBoothChange (e) {
    this.setState({
      boothComplaint: e.target.value
    })
  }

  boothSubmit () {
    console.log(this.state.boothComplaint)
    BoothComplaintController.create(aadharId, this.props.match.params.id, this.state.boothComplaint, data => {
      console.log(data)
    })
    this.triggerBooth()
  }

  triggerCandidate () {
    this.setState({
      candidateOpen: !this.state.candidateOpen
    })
  }

  onCandidateChange (e) {
    this.setState({
      candidateComplaint: e.target.value
    })
  }

  candidateSubmit () {
    console.log(this.state.candidateComplaint)
    CandidateComplaintController.create(aadharId, 'rawat', this.props.match.params.id, this.state.boothComplaint, data => {
      console.log(data)
    })
    this.triggerCandidate()
  }

  render () {
    let googleMaps = null
    let candis = []
    let container = <CircularProgress className='loader' />
    if (this.state.can.length > 0) {
      candis.push(this.state.can)
    }
    if (this.state.booth.name) {
      container = (
        <>
          <Grid container spacing={8}>
            <Grid item sm={8} md={8} lg={8}>
              <Typography variant='h2'>
                {this.state.booth.name}
              </Typography>
              <Typography variant='h6'>
                {this.state.booth.address}
              </Typography>
              <Typography variant='h6'>
                {this.state.booth.city}
              </Typography>
            </Grid>
            <Grid item s={4} md={4} lg={4}>
              <Typography>
                Ammenities available:
              </Typography>
              {this.state.booth.amenities.map(a => {
                return <li>{a}</li>
              })}
            </Grid>
          </Grid>
          <Divider />
          <br />
          <Typography variant='subheading'>
            Incharge: {this.state.booth.incharge}
          </Typography>
          { googleMaps }
          <Button variant='contained' color='secondary' className='button' onClick={this.triggerBooth}>
            Complaint against the Booth
          </Button>
          <Button variant='contained' color='secondary' className='button' onClick={this.triggerCandidate}>
            Complaint against a candidate
          </Button>
          <BoothComplaint
            open={this.state.boothOpen}
            handleClose={this.triggerBooth}
            onChange={this.onBoothChange}
            onSubmit={this.boothSubmit}
          />
          <CandidateComplaint
            open={this.state.candidateOpen}
            handleClose={this.triggerCandidate}
            onChange={this.onCandidateChange}
            onSubmit={this.candidateSubmit}
          />
          {candis}
        </>
      )
    }
    // if (this.state.booth.location) {
    //   console.log(this.state.booth.location.lat)
    //   googleMaps = (
    //     <GoogleMap
    //       defaultZoom={8}
    //       defaultCenter={{ lat: this.state.booth.location.lat, lng: this.state.booth.location.lng }}
    //     />
    //   )
    // }
    return (
      <Paper className='container'>
        {container}
      </Paper>
    )
  }
}
