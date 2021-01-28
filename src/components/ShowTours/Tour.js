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
// import { Link } from 'react-router-dom'
import { createPurchase } from '../../api/purchase'
// import axios from 'axios'
// import purchases from './../../data/tourData'
import messages from '../AutoDismissAlert/messages'

// const config = {
//   apiUrl: 'http://localhost:4741/purchases'
// }

class Tour extends Component {
  // Ad a constructor to initialize our movie state
  constructor (props) {
    super(props)
    // initialize our liked state
    this.state = {
      liked: false
    }
    this.state = {
      show: false
    }
  }

  toggleLike = () => {
    // When updating state based on the previous state, we need to pass `this.setState`
    // an `update` function. Which is guaranteed to always have the most up-to-date
    // version of `state` and `props`
    this.setState((state) => {
      return { liked: !state.liked }
    })
  }

  render () {
    const { msgAlert, history, user } = this.state.props
    // this.onCreatePurchase = () => {
    //   axios({
    //     method: 'post',
    //     url: 'http://localhost:4741/purchases',
    //     // headers: {
    //     //   'Authorization': `Bearer ${user.token}`
    //     // },
    //     data: {
    //       location: location,
    //       date: date,
    //       price: price
    //     }
    //   })
    //     .then(res => console.log(res))
    //     .catch(console.error)
    // }
    this.onCreatePurchase = event => {
      event.preventDefault()

      // const { msgAlert, history, user } = props
      const purchase = {
        data: {
          location: this.state.location,
          date: this.state.date,
          price: this.state.price
        }
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

    const { image } = this.props
    const { location, date, price } = this.props
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
                  onClick={this.toggleLike}
                  style={{ marginRight: '35px' }}
                  variant="primary">
                  {this.state.liked ? 'Unlike' : 'Like'}
                </Button>
                <Button
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
          <Form onSubmit={this.onCreatePurchase}>
            <Modal.Header closeButton>
              <Modal.Title>{location}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>Date: {date}</div>
              <div>Price: ${price}</div>
            </Modal.Body>
            <Modal.Body>Click Submit to confirm</Modal.Body>
            {/* <Modal.Footer> */}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
                Submit
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
