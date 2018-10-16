import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

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
    console.log(this.state.booths)
    var booths = []
    var boothDetails = {}
    if (this.state.booths) {
      for (var booth in this.state.booths) {
        boothDetails = this.state.booths[booth]
        booths.push(
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
        {booths}
      </Grid>
    )
  }
}
