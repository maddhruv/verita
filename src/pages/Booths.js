import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'

import BoothController from '../controllers/BoothController'

export default class Booths extends React.Component {
  constructor () {
    super()
    this.state = {
      booths: null
    }
  }

  componentWillMount () {
    BoothController.list((data) => {
      this.setState({ booths: data })
    })
  }

  render () {
    var container = []
    var boothDetails = {}
    let loader = <CircularProgress className='loader' />
    if (this.state.booths) {
      loader = null
      for (var booth in this.state.booths) {
        boothDetails = this.state.booths[booth]
        container.push(
          <Grid item sm={3} md={3} lg={3}>
            <a href={`/booth/${booth}`}>
              <Card className='booth-card'>
                <CardContent>
                  <Typography variant='h5'>
                    {boothDetails.name}
                  </Typography>
                  <Typography variant='caption'>
                    {boothDetails.address}, {boothDetails.city}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        )
      }
    }
    return (
      <Grid container spacing={8} className='container'>
        {container}
        {loader}
      </Grid>
    )
  }
}
