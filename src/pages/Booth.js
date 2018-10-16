import React from 'react'

import BoothController from '../controllers/BoothController'

export default class Booth extends React.Component {
  componentWillMount () {
    BoothController.read(this.props.match.params.id, (data) => {
      console.log(data)
    })
  }
  render () {
    return (
      <di>
        Booth {this.props.match.params.id}
      </di>
    )
  }
}
