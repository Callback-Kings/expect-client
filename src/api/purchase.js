import apiUrl from '../apiConfig'
import axios from 'axios'

export const createPurchase = (user, purchase) => {
<<<<<<< HEAD
  console.log('The user is:', user)
=======
  console.log('This is your purchase:', location)
>>>>>>> 78e603d (add on post on submit event to purchase tour modal.)
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
