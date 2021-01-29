import apiUrl from '../apiConfig'
import axios from 'axios'

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

export const deletePurchase = (id, purchase, user) => {
  return axios({
    url: apiUrl + '/purchases/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
