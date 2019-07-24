import React, { Component } from 'react'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import UserMenu from '../userProfile/UserMenu'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AlignJustify } from 'styled-icons/fa-solid';


export class UserTable extends Component {
  state = {
    userdata: []
  }
 // componentDidMount() {
  //   const url = 'http://localhost:5000/api/websites/';
  //   axios({
  //     url: url,
  //     method: 'get',
  //     headers: { 'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWQzM2Q0YjJmNTc5YjIxZDA4MzU0OWM3IiwibmFtZSI6IlRlc3RpbmciLCJtYXN0ZXJQYXNzd29yZCI6IiQyYSQxMCQ4Qm9KUmZaRVQ0enJFODAxU0UuUlIuSFMxLml3WVdDRGhDcnZJOGluNC5URWhGYjhHVGJmZSJ9LCJpYXQiOjE1NjM2Nzc4NzQsImV4cCI6MTU2NDAzNzg3NH0.8BCYd1Ujjz4-psBm7TsI1dGDStlwWULona5sW_Kgslo' },
  //   })
  //     .then(response => {
  //       this.setState({
  //         userdata: response.data
  //       })
  //       console.log(response)
  //     })
  // } 

  render() {
    return (
      <div>
        <UserMenu></UserMenu>
        <Container style={{ backgroundColor: 'black'}}>
          <Row className="justify-content-md-center ">
            <Col lg={5} className="headStyle" style={{ color: 'white'}}>Update Your Credentials </Col>
          </Row>
          <br />
          <Row className="justify-content-md-center">
            <Col sm={6}>
              <Form style={{ color: 'white'}}>
                <Form.Group controlId="webname">
                  <Form.Label>Website Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn btn-raised btn-info">
                  Update
  </Button>

              </Form>
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}

export default UserTable
