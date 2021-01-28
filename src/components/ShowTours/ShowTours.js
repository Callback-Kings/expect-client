import React from 'react'
import purchases from './../../data/tourData'
import Tour from './Tour'

const ShowTours = () => (
  <div>
    <h2 style={{ marginLeft: '37%', marginRight: '25%' }}>Tours To Take!</h2>
    {purchases.map(purchase => (
      <Tour
        key={purchase.id}purchase
        location={purchase.location}
        date={purchase.date}
        price={purchase.price}
        image={purchase.image}
      />
    ))}
  </div>
)

export default ShowTours
