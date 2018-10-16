import React from 'react'

export default class Candidate extends React.Component {
  render () {
    return (
      <div>
        Candidate {this.props.match.params.username}
      </div>
    )
  }
}
