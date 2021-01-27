import React from 'react'
import tours from './../../data/tourData'
import Tour from './Tour'

const ShowTours = () => (
  <div>
    <h2 style={{ marginLeft: '37%', marginRight: '25%' }}>Tours To Take!</h2>
    {tours.map(tour => (
      <Tour
        key={tour.id}
        location={tour.location}
        date={tour.date}
        price={tour.price}
        image={tour.image}
      />
    ))}
  </div>
)

export default ShowTours
