import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

// import { GoogleMap } from 'react-google-maps'

import BoothComplaint from '../components/BoothComplaint'
import CandidateComplaint from '../components/CandidateComplaint'
import BoothController from '../controllers/BoothController'
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
      candidateComplaint: null
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
    let container = <CircularProgress />
    if (this.state.booth.name) {
      container = (
        <>
          <Typography variant='h2'>
            {this.state.booth.name}
          </Typography>
          <Typography variant='h5'>
            {this.state.booth.address}
          </Typography>
          <Typography variant='h5'>
            {this.state.booth.city}
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
