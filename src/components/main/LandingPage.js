import React, { Component } from 'react'
import { Layout, Drawer, Navigation, Content, Header, Button, Text } from 'react-mdl'
import { Container, Col, Row } from 'react-bootstrap';
import {Security} from 'styled-icons/material'
import {Link} from 'react-router-dom'
import Features from '../main/features'

export class LandingPage extends Component {

 
constructor()
{
   super();
   
   this.state = {
      isvalid : window.sessionStorage.getItem("loggedin")

   };
  

}


  render() {
    if (this.state.isvalid == "true") {
      return (
        <div style={{ height: '800px', position: 'relative' }}>
          <Layout  className="landingBackground">
            <Header transparent title="PassSecure" style={{ color: 'white',fontFamily: 'DM Serif Display' }}>
              <Navigation>
                <a href="/about">About</a>
                <a href="/profile">Profile</a>
              </Navigation>
            </Header>
            <Drawer title="Menu">
              <Navigation>
                <a href="/about">About</a>
                <a href="/profile">Profile</a>
              </Navigation>
            </Drawer>
            <Content>
              <Container style={{marginTop:"1em"}}>
             
              <Row className="justify-content-center">
                  <Col sm={0.9}>
                  <Security size="80" color="white"/>
                  </Col>
                </Row>
                <Row className="justify-content-center" style={{marginTop:"2em",marginLeft:'100px'}}>
                <Col sm={6.5}>
                  <div className="mainHeading">Remembering Passwords is no more a Headache </div>
                </Col>
              </Row>
                <Row className="justify-content-center"  style={{marginTop:"2em"}}>
                  <Col sm={2}>
                  <Link className="btn btn-raised btn-primary ml-4" to="/register">Register Now </Link>
                  </Col>
                </Row>
              </Container>
              <Container style={{marginTop:'3em'}}>
              <Features></Features>
              </Container>
          </Content> </Layout>
          
        </div>
      )
    }

else
{
    return (
      <div style={{ height: '800px', position: 'relative' }}>
        <Layout  className="landingBackground">
          <Header transparent title="PassSecure" style={{ color: 'white',fontFamily: 'DM Serif Display' }}>
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
          <Content>
            <Container style={{marginTop:"1em"}}>
           
            <Row className="justify-content-center">
                <Col sm={0.9}>
                <Security size="80" color="white"/>
                </Col>
              </Row>
              <Row className="justify-content-center" style={{marginTop:"2em",marginLeft:'100px'}}>
                <Col sm={6.5}>
                  <div className="mainHeading">Remembering Passwords is no more a Headache </div>
                </Col>
              </Row>
              <Row className="justify-content-center"  style={{marginTop:"3em"}}>
                <Col sm={2}>
                  <Link className="btn btn-raised btn-primary ml-4" to="/register">Register Now </Link>
                </Col>
              </Row>
            </Container>
            <Container style={{marginTop:'3em'}}>
            <Features></Features>
            </Container>
                      </Content> </Layout>
        
      </div>
    )
  }
}
}

export default LandingPage
