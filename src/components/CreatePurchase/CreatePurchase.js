import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { makePurchase } from '../../api/purchase'

import Modal from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreatePurchase extends Component {
  constructor (props) {
    super(props)

    this.state = {
      purchased: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    makePurchase()
      .then(res => console.log(res))
      .catch(console.error)
  }

    function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {bookNow}
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSumit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
  render () {
    <Example />
    const { location, date, price } = this.props
}


export default CreatePurchase
