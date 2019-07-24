import React, { Component } from 'react'
import { Layout, Drawer, Navigation, Content, Header, Button, Text } from 'react-mdl'
import { Container } from '@material-ui/core';
import { CardGroup, Card, Row, Col, Badge, ListGroup, ListGroupItem } from 'react-bootstrap'
import Img1 from './images/1.jpeg'
import Img2 from './images/2.jpeg'

export class About extends Component {
  render() {
    return (
      <div style={{ height: '800px', position: 'relative' }}>
        <Layout className="landingBackground">
          <Header transparent title="PassSecure" style={{ color: 'white', fontFamily: 'DM Serif Display' }}>
            <Navigation>
              <a href="/">Home</a>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
              <a href="/about">About</a>
            </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <a href="/">Home</a>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
              <a href="/about">About</a>
            </Navigation>
          </Drawer>
          <br/>
          <Container style={{ width: '1000px', padding:'3em',border:'2px solid white',borderRadius:'20px',backgroundColor:'rgb(192,192,192,0.5)'}}>
            <Row className="justify-content-center">
              <Col sm={4}>
                <div className="mainHeading">Our Developers</div>
              </Col>
            </Row>
            <Row className="justify-content-center pt-5 ml-5" >
              <Col sm={5} >
                <Card style={{ width: '20rem'}}>
                  <Card.Img variant="top" src={Img1} height={300}/>
                  <Card.Body>
                    <Card.Title>Kinderbeer Sandhu</Card.Title>
                    <Card.Text>
                    Web Developer 
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Humber College, Toronto,ON</ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
              <Col sm={5}>
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={Img2} height={300}/>
                  <Card.Body>
                    <Card.Title>Gurwinder Singh</Card.Title>
                    <Card.Text>
                    Software Developer 
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Humber College, Toronto,ON</ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Container>
        </Layout>
      </div>
    )
  }
}

export default About
