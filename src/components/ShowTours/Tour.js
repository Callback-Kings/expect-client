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
// import { Link } from 'react-router-dom'
// import { createPurchase } from '../../api/purchase'

class Tour extends Component {
  // Ad a constructor to initialize our movie state
  constructor (props) {
    super(props)
    // initialize our liked state
    this.state = {
      liked: false
    }
    this.state = {
      purchased: ''
    }
    this.state = {
      show: false
    }
  }

  toggleLike = () => {
    // When updating state based on the previous state, we need to pass `this.setState`
    // an `update` function. Which is guaranteed to always have the most up-to-date
    // version of `state` and `props`
    this.setState((state, props) => {
      return { liked: !state.liked }
    })
  }

  purchaseTour = () => {
    this.setState((state, props) => {
      return { purchased: 'purchased' }
    })
  }

  // allows for other things to be defined in this space ('onClicK', 'State')
  render () {
    const { location, date, price, image } = this.props
    const { show } = this.state
    const handleClose = () => this.setState({ show: false })
    const handleShow = () => this.setState({ show: true })
    return (
      <Container className="tour-cards">
        <Row>
          <CardGroup>
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
          <Modal.Header closeButton>
            <Modal.Title>{location}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>Date: {date}</div>
            <div>Price: ${price}</div>
          </Modal.Body>
          <Modal.Body>Click Submit to confirm</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" href='#/create-purchases'>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    )
  }
}

// export our component so other components can use it
export default Tour
