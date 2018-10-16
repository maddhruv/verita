import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

export default class BoothComplaint extends React.Component {
  render () {
    return (
      <>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
        >
          <DialogTitle>Complaint Against the Booth</DialogTitle>
          <DialogContent>
            <TextField label='Complaint' onChange={this.props.onChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.props.onSubmit} variant='contained' color='primary' autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}
