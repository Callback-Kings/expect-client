import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter so we have access to the match route prop
import { withRouter, Redirect } from 'react-router-dom'
import { showPurchase } from '../../api/purchase'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class ShowPurchase extends Component {
  constructor (props) {
    super(props)

    // initially our movie state will be null, until it is fetched from the api
    this.state = {
      purchase: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    // make a request for a single movie
    showPurchase(match.params.id, user)
      .then(res => this.setState({ purchase: res.data.purchase }))
      .then(() => msgAlert({
        heading: 'Showing Purchase Successfully',
        message: 'Your purchase is now displayed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to show your purchase',
          message: 'Failed to show purchase with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { purchase, deleted } = this.state

    // if we don't have a purchase yet
    if (!purchase) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    // if the purchase is deleted
    if (deleted) {
      return <Redirect to="/purchases" />
    }

    return (
      <Jumbotron fluid style={{ boxShadow: '4px 4px 4px 4px rgba(0, 0, 0, 0.2)' }}>
        <Container style={{ textAlign: 'center' }}>
          <h2>Location: {purchase.location}</h2>
          <h5>Date: {purchase.date}</h5>
          <h6>Price: ${purchase.price}</h6>
        </Container>
      </Jumbotron>
    )
  }
}

export default withRouter(ShowPurchase)
