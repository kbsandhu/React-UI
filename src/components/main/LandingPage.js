import React, { Component } from 'react'
import { Layout, Drawer, Navigation, Content, Header, Button, Text } from 'react-mdl'
import { Container, Col, Row } from 'react-bootstrap';
import {Security} from 'styled-icons/material'
import Features from '../main/features'
import Footer from '../main/Footer'

export class LandingPage extends Component {
  render() {
    return (
      <div style={{ height: '800px', position: 'relative' }}>
        <Layout  className="landingBackground">
          <Header transparent title="PassSecure" style={{ color: 'white',fontFamily: 'DM Serif Display' }}>
            <Navigation>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
              <a href="/about">About</a>
              <a href="/posts">Posts</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Men">
            <Navigation>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
              <a href="/about">About</a>
              <a href="/posts">Posts</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <Container style={{marginTop:"1em"}}>
           
            <Row className="justify-content-center">
                <Col sm={0.9}>
                <Security size="80" color="white"/>
                </Col>
              </Row>
              <Row className="justify-content-center" style={{marginTop:"1em"}}>
                <Col sm={6.5}>
                  <div className="mainHeading">We can help you Protect Your Password</div>
                </Col>
              </Row>
              <Row className="justify-content-center"  style={{marginTop:"3em"}}>
                <Col sm={2}>
                  <Button raised colored>Register Now </Button>
                </Col>
              </Row>
            </Container>
            <Container style={{marginTop:'3em'}}>
            <Features></Features>
            </Container>
            
            <Footer></Footer>
          </Content> </Layout>
        
      </div>
    )
  }
}

export default LandingPage
