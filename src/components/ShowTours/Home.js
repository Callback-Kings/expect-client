import React from 'react'
import purchases from './../../data/tourData'
import Tour from './Tour'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
// import { BsSearch } from 'react-icons/bs'
import { Parallax } from 'react-parallax'

const image1 = 'https://millionmilesecrets.com/wp-content/uploads/denali-national-park-1733313_1280.jpg'

// const image2 = 'https://www.rei.com/adventures/assets/adventures/images/trip/gallery/northamerica/aza_12'
const image3 = 'https://wallpapershome.com/images/wallpapers/maldives-3840x2160-5k-4k-wallpaper-8k-indian-ocean-best-beaches-in-5312.jpg'
// const image4 = 'https://www.teahub.io/photos/full/1-12515_3072x1728-top-20-best-4k-ultra-hd-wallpapers.jpg'
// const image5 = 'https://www.teahub.io/photos/full/1-10160_2560x1440-beautiful-beach-hd-wallpapers-summer-hd.jpg'

const Home = ({ props, user, msgAlert, history }) => (
  <div>
    <Parallax bgImage={ image1 } strength={600}>
      <div>
        <Form.Group variant="light" style={{ minWidth: '0', background: 'rgba(254, 255, 255, 0)', borderRadius: '6px', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)', border: 'none!important', backgroundImage: 'url(https://www.smartertravel.com/wp-content/uploads/2017/08/grand-canyon-sunset-1200x627.jpg)', backgroundPosition: 'center', marginTop: '10px' }}>
          <div>
            <h1 style={{ textAlign: 'left', color: 'white' }}><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="90.000000pt" height="92.000000pt" viewBox="0 0 95.000000 92.000000"
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
            </svg>XPECT:   virtual tourism company</h1>
          </div>
        </Form.Group>
        <Form.Group variant="light" style={{ minWidth: '0', borderRadius: '6px', background: 'rgba(226, 125, 96, 0.5)', border: 'none!important', marginTop: '70px', marginLeft: '200px', marginRight: '200px' }}>
          <div>
            <h1 style={{ textAlign: 'center', color: '#E3E2DF', fontWeight: 'bold', marginRight: '10px' }}>Let&apos;s face it</h1>
          </div>
        </Form.Group>
        <Form.Group variant="light" style={{ minWidth: '0', borderRadius: '6px', background: 'rgba(254, 255, 255, 1)', border: 'none!important', marginTop: '10px', marginRight: '200px', marginLeft: '200px' }}>
          <div>
            <h1 style={{ textAlign: 'center', color: '#FC4445', fontWeight: 'bold', marginLeft: '10px' }}>traveling has changed</h1>
          </div>
        </Form.Group>
        <Form.Group variant="light" style={{ minWidth: '0', borderRadius: '6px', background: 'rgba(65, 179, 163, 0.9)', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)', border: 'none!important', marginTop: '10px', backgroundImage: 'url(https://www.wallpapertip.com/wmimgs/50-501545_golden-gate-bridge.jpg)', backgroundPosition: 'center' }}>
          <div>
            <h1 style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>So should the way w<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="90.000000pt" height="80.000000pt" viewBox="12 0 120.000000 90.000000"
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
            </svg>see the world!</h1>
          </div>
        </Form.Group>
      </div>
    </Parallax>
    <Parallax bgImage={ image3 } strength={600}>
      <Form.Group variant="light" style={{ minWidth: '0', backgroundColor: '#3FEEE6', boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.1)', border: 'none!important', borderRadius: '6px' }}>
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
      <div style={{ height: '100px' }}></div>
    </Parallax>
  </div>
)

export default withRouter(Home)
