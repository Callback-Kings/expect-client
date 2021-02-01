import React from 'react'
import purchases from './../../data/tourData'
import Tour from './Tour'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import FormControl from 'react-bootstrap/FormControl'
// import InputGroup from 'react-bootstrap/InputGroup'
// import { BsSearch } from 'react-icons/bs'

const ShowTours = ({ props, user, msgAlert, history }) => (
  <div>
    <Form.Group variant="light" style={{ minWidth: '0', backgroundColor: '#3FEEE6', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.1)', border: 'none!important', marginTop: '10px' }}>
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
        </svg>XPECT:   sights</h4>
      </div>
    </Form.Group>
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
