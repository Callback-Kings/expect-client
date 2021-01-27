// imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import { indexPurchase } from '../../api/purchase'

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
    console.log(user)
    indexPurchase(user, this.state.purchases)
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
      const purchasesList = this.state.purchases.map(purchase => (
        <Link to={'/purchases'} key={purchase._id}>
          <li key={purchase._id}>
            {purchase.location}
          </li>
        </Link>
      ))
      purchasesJsx = (
        <ul>
          {purchasesList}
        </ul>
      )
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
export default IndexPurchases
