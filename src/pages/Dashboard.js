import React from 'react'
import Grid from '@material-ui/core/Grid'
import ReactSvgPieChart from 'react-svg-piechart'

export default class Dashboard extends React.Component {
  render () {
    const boothData = [
      { title: 'Booth 1', value: 100, color: '#22594e' },
      { title: 'Booth 2', value: 60, color: '#2f7d6d' },
      { title: 'Booth 3', value: 30, color: '#3da18d' },
      { title: 'Booth 4', value: 20, color: '#69c2b0' },
      { title: 'Booth 5', value: 10, color: '#a1d9ce' }
    ]
    const partyData = [
      { title: 'BJP', value: 100, color: '#F77800' },
      { title: 'Congress', value: 60, color: '#007F3D' },
      { title: 'Others', value: 30, color: '#2B18A0' }
    ]
    const candidatesData = [
      { title: 'Ram Prasad', value: 100, color: '#FA8072' },
      { title: 'Yasheshwar', value: 60, color: '#FF2400' },
      { title: 'Prahlad', value: 30, color: '#7C0A02' },
      { title: 'Om Prakash', value: 90, color: '#ED2939' },
      { title: 'Rakesh', value: 50, color: '#ED2939' },
      { title: 'Others', value: 10, color: '#C21807' }
    ]
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item sm={3} md={3} lg={3} className='grid'>
            <ReactSvgPieChart
              data={boothData}
              viewBoxSize={50}
            />
          </Grid>
          <Grid item sm={3} md={3} lg={3} className='grid'>
            <ReactSvgPieChart
              data={partyData}
              viewBoxSize={50}
            />
          </Grid>
          <Grid item sm={3} md={3} lg={3} className='grid'>
            <ReactSvgPieChart
              data={candidatesData}
              viewBoxSize={50}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}
