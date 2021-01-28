import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createPurchase } from '../../api/purchase'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreatePurchase extends Component {
  constructor (props) {
    super(props)

    this.state = {
      location: '',
      date: '',
      price: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreatePurchase = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props
    const purchase = {
      location: this.state.location,
      date: this.state.date,
      price: this.state.price
    }

    createPurchase(user, purchase)
      // .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Purchase successful.',
        message: messages.createPurchaseSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ location: '', date: '', price: '' })
        msgAlert({
          heading: 'Purchase Failed with error: ' + error.message,
          message: messages.createPurchaseFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { location, date, price } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Create a Purchase</h3>
          <Form onSubmit={this.onCreatePurchase}>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                required
                type="text"
                name="location"
                value={location}
                placeholder="Location Name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                name="date"
                value={date}
                type="text"
                placeholder="Date"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Enter a Price</Form.Label>
              <Form.Control
                required
                name="price"
                value={price}
                type="text"
                placeholder="Enter a price"
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

export default withRouter(CreatePurchase)
