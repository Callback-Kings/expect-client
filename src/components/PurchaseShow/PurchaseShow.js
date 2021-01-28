import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter so we have access to the match route prop
import { withRouter, Redirect } from 'react-router-dom'
import { showPurchase, deletePurchase } from '../../api/purchase'

class PurchaseShow extends Component {
  constructor (props) {
    super(props)

    // initially our purchase state will be null, until it is fetched from the api
    this.state = {
      purchase: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    // make a request for a single purchase
    showPurchase(match.params.id, user)
      // set the purchase state, to the movie we got back in the response's data
      .then(res => this.setState({ purchase: res.data.purchase }))
      .then(() => msgAlert({
        heading: 'Showing Purchase Successfully',
        message: 'The purchase is now displayed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing Purchase Failed',
          message: 'Failed to show purchase with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = event => {
    const { user, msgAlert, match } = this.props

    // make a delete axios request
    deletePurchase(match.params.id, user)
      // set the deleted variable to true, to redirect to the home page in render
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Deleted Comment Successfully!',
        message: 'Comment deleted!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Deleting Comment Failed',
          message: 'Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { purchase, deleted } = this.state

    // if we don't have a movie yet
    if (!purchase) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    // if the comment is deleted
    if (deleted) {
      // redirect to the home page
      return <Redirect to="/" />
    }

    return (
      <div>
        <h3>{purchase.location}</h3>
        <h4>{purchase.date}</h4>
        {/* <button onClick={this.handleDelete}>Delete Movie</button> */}
      </div>
    )
  }
}

export default withRouter(PurchaseShow)
