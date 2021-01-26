import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

class UpdatePurchase extends Component {
  constructor (props) {
    super(props)

    this.state = {
      purchase: {
        comment: ''
      },
      updated: false
    }
  }
 handleInputChange = (event) => {
   // make sure this keeps going
   event.persist()
   // merge updatedField and the current state.purchase
   this.setState(currState => {
     // create an object where the `name` attribute of the input
     const updatedField = {
       [event.target.name]: event.target.value
     }

     const newComment = { ...currState.purchase, updatedField }
   })
 }
 render () {
   return (
     <Fragment>
       <h2>Update Your Comment:</h2>
       <form>
         <input
           name="comment"
           type="text"
           placeholder="New Comment"
           value={this.state.purchase.comment}
           onChange={this.handleInputChange}
         />
       </form>
     </Fragment>
   )
 }
}

export default UpdatePurchase
