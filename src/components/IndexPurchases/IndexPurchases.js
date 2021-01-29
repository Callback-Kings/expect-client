// imports
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import { indexPurchase } from '../../api/purchase'
// import purchases from '../../data/tourData'
// import UpdatePurchase from './../UpdatePurchase/UpdatePurchase'

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
            {purchase.location}
          </Link>
        </li>
      ))
    }

    return (
      <React.Fragment>
        <h1>Index Purchases Page</h1>
        {purchasesJsx}
      </React.Fragment>
    )
  }
}

// exports
export default withRouter(IndexPurchases)
