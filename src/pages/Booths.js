import React from 'react'

import BoothController from '../controllers/BoothController'

export default class Booths extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  componentWillMount () {
    BoothController.list((data) => {
      this.setState({ booths: data })
    })
  }

  render () {
    return (
      <di>
        Booth
      </di>
    )
  }
}
