import apiUrl from '../apiConfig'
import axios from 'axios'

export const makePurchase = (user, purchase) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/purchases/',
    headers: {
      'Authorization': `Token token=${user.token}`
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

export const indexPurchase = (purchase, user) => {
  return axios({
    url: apiUrl + '/purchases/',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      purchase: {
        email: purchase.email,
        password: purchase.password
      }
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

export const updatePurchase = (id, purchase, user) => {
  return axios({
    url: apiUrl + '/purchases/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { purchase }
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
