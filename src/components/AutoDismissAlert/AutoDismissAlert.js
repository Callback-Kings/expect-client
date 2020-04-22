import React from 'react'
import Alert from 'react-bootstrap/Alert'

import './AutoDismissAlert.scss'

class AutoDismissAlert extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
  }
  componentDidMount () {
    const { deleteAlert, id } = this.props
    setTimeout(() => {
      deleteAlert(id)
    }, 5000)
  }

  handleClose = () => this.setState({ show: false })

  render () {
    const { variant, heading, message } = this.props
    return (
      <Alert
        dismissible
        show={this.state.show}
        variant={variant}
        onClose={this.handleClose}
      >
        <div className="container">
          <Alert.Heading>
            {heading}
          </Alert.Heading>
          <p className="alert-body">{message}</p>
        </div>
      </Alert>
    )
  }
}

export default AutoDismissAlert
