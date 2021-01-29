import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { updatePurchase, showPurchase, deletePurchase } from '../../api/purchase'
import messages from '../AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
// import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import IndexPurchases from './../IndexPurchases/IndexPurchases'
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
      updated: false,
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
  componentDidUpdate () {
    if (this.state.prevComm !== this.state.comment && this.state.updated === true) {
      showPurchase(this.props.match.params.id, this.props.user)
        .then((res) => {
          if (!res.data.purchase.comment) {
            this.setState({ prevComm: 'No Comment Yet' })
          } else {
            this.setState({ prevComm: res.data.purchase.comment })
          }
        })
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const { user, msgAlert } = this.props
    try {
      await updatePurchase(this.props.match.params.id, this.state.comment, user)
        .then(() => this.setState({ updated: true, comment: '' }))
        .then(() => this.setState({ updated: false }))
        .then(() => msgAlert({
          heading: 'Updated Succesfully',
          message: messages.updatePurchaseSuccess,
          variant: 'success'
        }))
    } catch (err) {
      msgAlert({
        heading: 'Update Comment failed with error: ' + err.message,
        message: messages.updatePurchaseFailure,
        variant: 'danger'
      })
    }
  }
  handleDeleteSubmit = (event) => {
    event.preventDefault()
    const { msgAlert, history, user } = this.props
    deletePurchase(this.props.match.params.id, user)
      .then(() => this.setState({ comment: '' }))
      .then(() => msgAlert({
        heading: 'Deleted Succesfully',
        message: messages.deletePurchaseSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/purchases/'))
      .catch(err => {
        msgAlert({
          heading: 'Update Comment failed with error: ' + err.message,
          message: messages.deletePurchaseFailure,
          variant: 'danger'
        })
      })
  }
  render () {
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <Form onSubmit={this.handleDeleteSubmit}>
            <Card>
              <Card.Header><h2>Current Comment:</h2></Card.Header>
              <Card.Body>
                <Card.Text>
                  {this.state.prevComm}
                </Card.Text>
              </Card.Body>
              <Card.Footer><Button variant="primary" type="submit">Delete</Button></Card.Footer>
            </Card>
          </Form>
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
