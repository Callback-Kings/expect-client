import React from 'react'
import Alert from 'react-bootstrap/Alert'

import './AutoDismissAlert.scss'

class AutoDismissAlert extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.timeoutId = null
  }

  componentDidMount () {
    this.timeoutId = setTimeout(this.handleClose, 5000)
  }

  componentWillUnmount () {
    clearTimeout(this.timeoutId)
  }

  handleClose = () => this.setState({ show: false })

  render () {
    const { variant, heading, message, deleteAlert, id } = this.props

    // Delete this alert after the fade animation time (300 ms by default)
    if (!this.state.show) {
      setTimeout(() => {
        deleteAlert(id)
      }, 300)
    }

    return (
      <Alert
        dismissible
        show={this.state.show}
        variant={variant}
        onClose={this.handleClose}
      >
        <div className="container">
          <Alert.Heading style={{ textAlign: 'left' }}>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="60.000000pt" height="60.000000pt" viewBox="10 0 200.000000 150.000000"
              preserveAspectRatio="xMidYMid meet">
              <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g transform="translate(0.000000,92.000000) scale(0.100000,-0.100000)"
                fill="#FC4445" stroke="none">
                <path d="M403 821 c-111 -41 -191 -121 -234 -231 -31 -80 -24 -213 15 -289 79
                  -154 231 -234 399 -211 60 9 155 49 177 75 11 13 -3 15 -109 15 l-121 0 0 290
                  0 290 111 0 c94 0 110 2 100 14 -47 56 -241 83 -338 47z"/>
                <path d="M610 605 l0 -85 125 0 125 0 0 -40 0 -40 -125 0 -125 0 0 -95 0 -96
                  118 3 117 3 25 50 c22 44 25 63 25 160 0 103 -2 113 -30 165 l-30 55 -112 3
                  -113 3 0 -86z"/>
              </g>
            </svg>
          </Alert.Heading>
          <h6>{heading}</h6>
          <p className="alert-body">{message}</p>
        </div>
      </Alert>
    )
  }
}

export default AutoDismissAlert
