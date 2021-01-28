import React from 'react'
import purchases from './../../data/tourData'
import Tour from './Tour'
import { withRouter } from 'react-router-dom'

const ShowTours = ({ props, user, msgAlert, history }) => (
  <div>
    <h2 style={{ marginLeft: '37%', marginRight: '25%' }}>Tours To Take!</h2>
    {purchases.map(purchase => (
      <Tour
        history={history}
        msgAlert={msgAlert}
        user={user}
        key={purchase.id}
        location={purchase.location}
        date={purchase.date}
        price={purchase.price}
        image={purchase.image}
      />
    ))}
  </div>
)

export default withRouter(ShowTours)
