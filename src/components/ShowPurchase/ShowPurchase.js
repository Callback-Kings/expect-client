import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter so we have access to the match route prop
import { withRouter, Redirect } from 'react-router-dom'
import { showPurchase } from '../../api/purchase'

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

  // handleDelete = event => {
  //   const { user, msgAlert, match } = this.props
  //
  //   // make a delete axios request
  //   movieDelete(match.params.id, user)
  //     // set the deleted variable to true, to redirect to the movies page in render
  //     .then(() => this.setState({ deleted: true }))
  //     .then(() => msgAlert({
  //       heading: 'Deleted Movie Successfully!',
  //       message: 'Movie deleted!',
  //       variant: 'success'
  //     }))
  //     .catch(error => {
  //       msgAlert({
  //         heading: 'Deleting Movie Failed',
  //         message: 'Failed with error: ' + error.message,
  //         variant: 'danger'
  //       })
  //     })
  // }

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

    // if the movie is deleted
    if (deleted) {
      // redirect to the movies index page
      return <Redirect to="/purchases" />
    }

    return (
      <div>
        <h3>{purchase.location}</h3>
        <h4>{purchase.date}</h4>
        <h4>{purchase.price}</h4>
        {/* <h4>{purchase.comment}</h4>
        <button onClick={this.handleDelete}>Delete Movie</button>
        <button>
          <Link to={`/purchases/${purchase._id}/edit`}>Update Movie</Link>
        </button> */}
      </div>
    )
  }
}

export default withRouter(ShowPurchase)
