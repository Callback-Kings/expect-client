import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import { showPurchase } from '../../api/purchase'

class FindPurchase extends Component {
  constructor (props) {
    super(props)

    this.state = {
      purchase: null
    }
  }

  handleInputChange = (event) => {
    event.persist()
    this.setState({ purchase: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user } = this.props
    showPurchase(this.state.id, user)
      .then(res => console.log(res))
      // .then(res => this.setState())
      .catch(console.error)
  }

  render () {
    let purchaseDisplay
    const { purchase } = this.state
    if (!purchase) {
      purchaseDisplay = ''
    } else {
      purchaseDisplay = (
        <Fragment>
          <Card>
            <Card.Header as="h5">Purchase:</Card.Header>
            <Card.Body>
              <Card.Title>{purchase.location}</Card.Title>
              <Card.Text>
                {purchase.date}
                {purchase.price}
                {purchase.comment}
              </Card.Text>
              <Button variant="primary">Update Comment</Button>
            </Card.Body>
          </Card>
        </Fragment>
      )
    }
    return (
      <div>
        <div className="row">
          <Form.Group controlId="purchaseId" style={{ width: '18rem', border: 'none', marginLeft: '50%', marginRight: '50%' }}>
            <Form onSubmit={this.handleSubmit} inline="true">
              <FormControl
                type="text"
                className="mr-sm-2"
                required
                name="purchaseId"
                value={this.state.id}
                placeholder="Enter Purchase Id"
                onChange={this.handleInputChange}
              />
              <Button type="submit" variant="outline-primary" inline="true" required>Search</Button>
              {purchaseDisplay}
            </Form>
          </Form.Group>
        </div>
      </div>
    )
  }
}

export default withRouter(FindPurchase)
