// imports
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import { indexPurchase } from '../../api/purchase'
// import purchases from '../../data/tourData'
// import UpdatePurchase from './../UpdatePurchase/UpdatePurchase'
import Form from 'react-bootstrap/Form'

// class

class IndexPurchases extends Component {
  constructor (props) {
    super(props)

    this.state = {
      purchases: null
    }
  }

  componentDidMount () {
    const { user } = this.props
    indexPurchase(user)
      .then(res => this.setState({ purchases: res.data.purchases }))
      .catch(console.error)
  }

  render () {
    let purchasesJsx
    if (!this.state.purchases) {
      purchasesJsx = 'Loading...'
    } else if (this.state.purchases.length === 0) {
      purchasesJsx = 'No purchase history. Why not make some? Go buy a tour!'
    } else {
      purchasesJsx = this.state.purchases.map(purchase => (
        <li key={purchase.id}>
          <Link to={`/purchases/${purchase.id}`} location={purchase.location} date={purchase.date} price={purchase.price}>
            {purchase.location} - {purchase.date}  (ID: {purchase.id})
          </Link>
        </li>
      ))
    }

    return (
      <React.Fragment>
        <Form.Group variant="light" style={{ minWidth: '0', backgroundColor: '#3FEEE6', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)', border: 'none!important', marginTop: '10px' }}>
          <div>
            <h4 style={{ color: '' }}><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="90.000000pt" height="92.000000pt" viewBox="0 0 99.000000 92.000000"
              preserveAspectRatio="xMidYMid meet">
              <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g transform="translate(0.000000,92.000000) scale(0.100000,-0.100000)"
                fill="#FC4445" stroke="none">
                <path d="M403 821 c-111 -41 -191 -121 -234 -231 -31 -80 -24 -213 15 -289 79
                    -154 231 -234 399 -211 60 9 155 49 177 75 11 13 -3 15 -109 15 l-121 0 0 290
                    0 290 111 0 c94 0 110 2 100 14 -47 56 -241 83 -338 47z"/>
                <path d="M610 605 l0 -85 125 0 125 0 0 -40 0 -40 -125 0 -125 0 0 -95 0 -96
                    118 3 117 3 25 50 c22 44 25 63 25 160 0 103 -2 113 -30 165 l-30 55 -112 3
                    -113 3 0 -86z"/>
              </g>
            </svg></h4><h1 style={{ textAlign: 'center' }}>Purchases</h1>
          </div>
        </Form.Group>
        <h5 style={{ textAlign: 'left' }}>{purchasesJsx}</h5>
      </React.Fragment>
    )
  }
}

// exports
export default withRouter(IndexPurchases)
