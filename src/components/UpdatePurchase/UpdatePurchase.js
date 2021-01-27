import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import { updatePurchase, showPurchase } from '../../api/purchase'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdatePurchase extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comment: '',
      prevComm: '',
      updated: false
    }
  }
  componentDidMount () {
    showPurchase(this.props.match.id, this.props.user)
      .then((res) => this.setState({ prevComm: res.purchase.comment }))
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { msgAlert, history, user } = this.props

    updatePurchase(this.props.match.id, this.state.purchase, user)
      .then(() => this.setState({ updated: true }))
      .then(() => msgAlert({
        heading: 'Updated Succesfully',
        message: messages.updatePurchaseSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(err => {
        msgAlert({
          heading: 'Update Comment failed with error: ' + err.message,
          message: messages.updatePurchaseFailure,
          variant: 'danger'
        })
      })
  }
 handleInputChange = (event) => this.setState({
   [event.target.name]: event.target.value
 })
 render () {
   if (this.state.updated) {
     return <Redirect to={`/purchases/${this.props.match.params.id}`}/>
   }
   return (
     <div className="row">
       <div className="col-sm-10 col-md-8 mx-auto mt-5">
         <h2>Current Comment:</h2>
         <p>{this.state.prevComm}</p>
         <h2>Update Your Comment:</h2>
         <Form onSubmit={this.handleSubmit}>
           <Form.Group controlId="comment">
             <Form.Label>Enter Your New Comment</Form.Label>
             <Form.Control
               required
               name="comment"
               type="text"
               placeholder="New Comment"
               value={this.state.purchase.comment}
               onChange={this.handleInputChange}
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
