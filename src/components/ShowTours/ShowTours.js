import React from 'react'
import purchases from './../../data/tourData'
import Tour from './Tour'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
const ShowTours = ({ props, user, msgAlert, history }) => (
  <div>
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
