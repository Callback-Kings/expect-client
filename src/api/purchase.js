import apiUrl from '../apiConfig'
import axios from 'axios'
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`)
      })
    })
  }

  // ...

  render () {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51IF03kIkhqLtNmbJwOU6YIQFW7e45twsNwVBF9jeIEIJV7ftyo7ReWXTPXq8LaZZkZtpB6wGRhQGFfC5M7Kc271w00Ci70YINz"
      />
    )
  }
}

export const createPurchase = (user, purchase) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/purchases/',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      purchase: {
        location: purchase.location,
        date: purchase.date,
        price: purchase.price,
        comment: purchase.comment
      }
    }
  })
}

export const indexPurchase = (user, purchase) => {
  return axios({
    url: apiUrl + '/purchases/',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const showPurchase = (id, user) => {
  return axios({
    url: apiUrl + '/purchases/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const updatePurchase = (id, data, user) => {
  return axios({
    url: apiUrl + '/purchases/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { purchase: { comment: data } }
  })
}

export const deletePurchase = (id, user) => {
  return axios({
    url: apiUrl + '/purchases/' + id,
    method: 'DELETE',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    }
  })
}
