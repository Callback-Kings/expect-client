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
                  onClick={this.purchaseTour}
                  variant="primary">
                  {this.state.purchased ? 'Booked' : 'Book Now'}
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    )
  }
}

// export our component so other components can use it
export default Tour
