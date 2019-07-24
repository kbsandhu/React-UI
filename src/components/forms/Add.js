import React, { Component } from 'react'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import UserMenu from '../userProfile/UserMenu'
import axios from 'axios';



export class UserTable extends Component {

    
      constructor(props)
   {
    super();
   
    var i = props.location.data;
    this.state = {
       
        title: '',
        password:'',
        email:'',
        username:''
       
      };
     
   }
   onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
   onSubmit = e => {
       alert("submitted");
    e.preventDefault();
    const editedWebsite = {
     
      title: this.state.title,
      email: this.state.email,
      password: this.state.password,
      userName:this.state.username
    };
      var json = JSON.stringify(editedWebsite);
      console.log("Json = " + json);
      
    
      
      const url = 'http://localhost:5000/api/websites/';
      axios({
        headers:  {'content-type' : 'application/json'  ,
                    'x-auth-token' : window.sessionStorage.getItem('token')
    },
      
     method: 'post',
     url: url,
     data: json
   }).then(function (response) {
     window.location = '/profile'
  
    
   })
   .catch(function (error) {
     console.log(error);
   });


   }
  
   
  

  render() {

    console.log(this.state.username);
    return (
      <div style={{backgroundImage:'linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%)',height:'600px'}}>
        <UserMenu></UserMenu>
        
        <Container style={{width:'600px'}}>
          <Row className="justify-content-md-center ">
            <Col lg={6} className="headStyle">Add New Credential</Col>
          </Row>
          <br />
          <Row className="justify-content-md-center addPageLabels">
            <Col sm={10}>
              <Form style={{ backgroundColor: '#0c0c0c',backgroundImage:'linear-gradient(180deg, #0c0c0c 0%, #847477 100%)',border:'2px groove black',borderRadius:'12px',color: 'white',
              padding:'30px',/* Fallback for older browsers without RGBA-support */} } onSubmit={this.onSubmit}>
                <Form.Group controlId="webname">
                  <Form.Label>Website Name</Form.Label>
                  <Form.Control type="text"   id='title' onChange={this.onChange} value={this.state.title}  />
                </Form.Group>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" id='username'   onChange={this.onChange} value={this.state.username}/>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text"  id='password' onChange={this.onChange} value={this.state.password} />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label >
                  <Form.Control type="text"  id='email' onChange={this.onChange} value={this.state.email}/>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn btn-raised btn-info">
                  ADD
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