import React from 'react'
import purchases from './../../data/tourData'
import Tour from './Tour'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
// import { BsSearch } from 'react-icons/bs'

const ShowTours = ({ props, user, msgAlert, history }) => (
  <div>
    <Jumbotron fluid style={{ backgroundImage: 'url(https://www.smartertravel.com/wp-content/uploads/2017/08/grand-canyon-sunset-1200x627.jpg)', marginTop: '10px' }}>
      <Container>
        <Jumbotron fluid style={{ minWidth: '0', marginLeft: '500px', background: 'rgba(226, 125, 96, 1)', boxShadow: '4px 4px 4px 4px rgba(0, 0, 0, 0.1)' }}>
          <Container style={{ textAlign: 'center' }}>
            <h1>EXPECT:</h1>
          </Container>
        </Jumbotron>
        <Jumbotron style={{ minWidth: '0', marginRight: '500px', background: 'rgba(204, 204, 204, 1)', boxShadow: '4px 4px 4px 4px rgba(0, 0, 0, 0.1)' }}>
          <Container style={{ textAlign: 'center' }}>
            <h1>virtual tourism</h1>
          </Container>
        </Jumbotron>
      </Container>
    </Jumbotron>
    <Jumbotron fluid style={{ background: 'rgba(226, 125, 96, 0.5)' }}>
      <Container>
        <Jumbotron fluid style={{ minWidth: '0', background: 'rgba(254, 255, 255, 0.3)', borderRadius: '13px', marginLeft: '200px', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)' }}>
          <Container style={{ textAlign: 'center' }}>
            <h1>Let&apos;s face it</h1>
          </Container>
        </Jumbotron>
        <Jumbotron fluid style={{ minWidth: '0', background: 'rgba(254, 255, 255, 1)', borderRadius: '13px', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)' }}>
          <Container style={{ textAlign: 'center' }}>
            <h1>traveling has changed.</h1>
          </Container>
        </Jumbotron>
        <Jumbotron fluid style={{ minWidth: '0', background: 'rgba(252, 68, 69, 1)', borderRadius: '13px', marginLeft: '200px', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)' }}>
          <Container style={{ textAlign: 'center' }}>
            <h1>So should the way w<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="119.000000pt" height="92.000000pt" viewBox="0 0 119.000000 92.000000"
              preserveAspectRatio="xMidYMid meet">
              <metadata>
              Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g transform="translate(0.000000,92.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M403 821 c-111 -41 -191 -121 -234 -231 -31 -80 -24 -213 15 -289 79
              -154 231 -234 399 -211 60 9 155 49 177 75 11 13 -3 15 -109 15 l-121 0 0 290
              0 290 111 0 c94 0 110 2 100 14 -47 56 -241 83 -338 47z"/>
                <path d="M610 605 l0 -85 125 0 125 0 0 -40 0 -40 -125 0 -125 0 0 -95 0 -96
              118 3 117 3 25 50 c22 44 25 63 25 160 0 103 -2 113 -30 165 l-30 55 -112 3
              -113 3 0 -86z"/>
              </g>
            </svg> see the world!</h1>
          </Container>
        </Jumbotron>
      </Container>
    </Jumbotron>
    <Jumbotron fluid style={{ minWidth: '0', background: 'rgba(226, 125, 96, 0.1)' }}>
      <Container style={{ textAlign: 'center' }}>
        <Form.Group variant="light" style={{ minWidth: '0', background: 'rgba(254, 255, 255, 1)', borderRadius: '6px', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)', border: 'none' }}>
          <FormControl type="text" placeholder="Where to?" size="lg" />
          <Button variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>Search</Button>
        </Form.Group>
      </Container>
    </Jumbotron>

    <Row style={{ marginTop: '30px' }}>
      <Jumbotron style={{ minWidth: '42%', backgroundColor: '#3FEEE6', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)' }}>
        <Container style={{ textAlign: 'center', color: '#E3E2DF' }}>
          <h4 style={{}}>EXPECT</h4>
        </Container>
      </Jumbotron>
      <Jumbotron style={{ minWidth: '0%', backgroundColor: 'transparent', transparency: '0.0' }}>
        <Container style={{ textAlign: 'center' }}>
          <h1 style={{}}>:</h1>
        </Container>
      </Jumbotron>
      <Jumbotron style={{ minWidth: '42%', backgroundColor: '#CAFAFE', opacity: '0' }}>
        <Container style={{ textAlign: 'center', color: '#E7717D' }}>
          <div>
            <h3 style={{}}>sights</h3>
          </div>
        </Container>
      </Jumbotron>
    </Row>
    <Row style={{ marginTop: '10px' }}>
      <Jumbotron style={{ minWidth: '42%', backgroundColor: '#3FEEE6', opacity: '0' }}>
        <Container style={{ textAlign: 'center', color: '#E3E2DF' }}>
          <h4 style={{}}>EXPECT</h4>
        </Container>
      </Jumbotron>
      <Jumbotron style={{ minWidth: '0%', backgroundColor: 'transparent', opacity: '0' }}>
        <Container style={{ textAlign: 'center' }}>
          <h1 style={{}}>:</h1>
        </Container>
      </Jumbotron>
      <Jumbotron style={{ minWidth: '42%', backgroundColor: '#CAFAFE', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)' }}>
        <Container style={{ textAlign: 'center', color: '#E7717D' }}>
          <div>
            <h3 style={{}}>sights</h3>
          </div>
        </Container>
      </Jumbotron>
    </Row>
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
