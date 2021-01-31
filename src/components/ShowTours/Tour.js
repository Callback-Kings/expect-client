// import everything react needs to function at a basic level
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
// import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { createPurchase } from '../../api/purchase'
import messages from '../AutoDismissAlert/messages'

import { InjectedCheckoutForm } from '../CheckoutForm/CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe('pk_test_51IF03kIkhqLtNmbJwOU6YIQFW7e45twsNwVBF9jeIEIJV7ftyo7ReWXTPXq8LaZZkZtpB6wGRhQGFfC5M7Kc271w00Ci70YINz')
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import purchases from './../../data/tourData'
// import { withRouter } from 'react-router-dom'

// const config = {
//   apiUrl: 'http://localhost:4741/purchases'
// }

class Tour extends Component {
  // Ad a constructor to initialize our movie state
  constructor (props) {
    super(props)
    // initialize our liked state
    this.state = {
      show: false
    }
  }

  onCreatePurchase = (event) => {
    event.preventDefault()
    const { user, msgAlert, history } = this.props
    const purchase = {
      location: this.props.location,
      date: this.props.date,
      price: this.props.price
    }
    if (user) {
      createPurchase(user, purchase)
        .then(() => msgAlert({
          heading: 'Purchase successful.',
          message: messages.createPurchaseSuccess,
          variant: 'success'
        }))
        .then(() => history.push('/purchases'))
        .catch(error => {
          this.setState({ location: '', date: '', price: '' })
          msgAlert({
            heading: 'Purchase Failed with error: ' + error.message,
            message: messages.createPurchaseFailure,
            variant: 'danger'
          })
        })
    } else {
      history.push('/sign-up')
      msgAlert({
        heading: 'Please sign up to book a tour. Already a User? Sign in to Book!',
        variant: 'danger'
      })
    }
  }

  render () {
    const { image } = this.props
    const { location, date, price, user } = this.props
    const { show } = this.state
    const handleClose = () => this.setState({ show: false })
    const handleShow = () => this.setState({ show: true })

    return (
      <Container className="tour-cards">
        <Row>
          <CardGroup >
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{location}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Date: {date}</ListGroupItem>
                <ListGroupItem>Price: ${price}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button
                  style={{ boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)' }}
                  onClick={handleShow}
                  type="submit"
                  variant="primary">
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Form user={user} onSubmit={this.onCreatePurchase}>
            <Modal.Header closeButton>
              <Modal.Title>{location}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>Date: {date}</div>
              <div>Price: ${price}</div>
            </Modal.Body>
            <Modal.Body>
              <Elements stripe={stripePromise}>
                <InjectedCheckoutForm />
              </Elements>
            </Modal.Body>
            <Modal.Body>Pay to confirm</Modal.Body>
            {/* <Modal.Footer> */}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
          {/* </Modal.Footer> */}
        </Modal>
      </Container>
    )
  }
}

// export our component so other components can use it
export default Tour
