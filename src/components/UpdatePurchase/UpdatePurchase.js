import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { updatePurchase, showPurchase } from '../../api/purchase'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdatePurchase extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comment: '',
      prevComm: '',
      updated: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  componentDidMount () {
    showPurchase(this.props.match.params.id, this.props.user)
      .then((res) => {
        if (!res.data.purchase.comment) {
          this.setState({ prevComm: 'No Comment Yet' })
        } else {
          this.setState({ prevComm: res.data.purchase.comment })
        }
      })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { msgAlert, history, user } = this.props
    updatePurchase(this.props.match.params.id, this.state.comment, user)
      .then(() => this.setState({ updated: true }))
      .then(() => msgAlert({
        heading: 'Updated Succesfully',
        message: messages.updatePurchaseSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(err => {
        msgAlert({
          heading: 'Update Comment failed with error: ' + err.message,
          message: messages.updatePurchaseFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h2>Current Comment:</h2>
          <p>{this.state.prevComm}</p>
          <h2>Update Your Comment:</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="comment">
              <Form.Label>Enter Your New Comment</Form.Label>
              <Form.Control
                required
                name="comment"
                type="text"
                placeholder="New Comment"
                value={this.state.comment}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>

          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(UpdatePurchase)
