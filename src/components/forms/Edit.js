import React, { Component } from 'react'
import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import UserMenu from '../userProfile/UserMenu'
import axios from 'axios';

export class UserTable extends Component {

    
      constructor(props)
   {
    super();
   
    var i = props.location.data;
    if(i == null)
    {
      this.state = {
        id: "1",
        title: "",
        password:"",
        email:"",
        username:""
       
      };
    }
    else
    {
    this.state = {
        id: i.id,
        title: i.title,
        password:i.password,
        email:i.email,
        username:i.username
       
      };
    }
   }
   onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
   onSubmit = e => {
     
    e.preventDefault();
    const editedWebsite = {
       id : this.state.id,
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
                    'x-auth-token' : window.sessionStorage.getItem('token')    },
      
     method: 'put',
     url: url,
     data: json
   }).then(function (response) {
     window.location = '/profile'
  
    
   })
   .catch(function (error) {
     console.log(error);
   });


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
    if (this.state.id==="1" )  {
      window.location = '/profile';
      return <div> </div>
    }
    else
    {

    console.log(this.state.username);
    return (
      <div style={{backgroundImage:'linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%)',height:'600px'}} className="addPageLabels">
        <UserMenu></UserMenu>
        <Container style={{width:'600px'}}>
          <Row className="justify-content-md-center ">
            <Col lg={7} className="headStyle">Update Your Credentials </Col>
          </Row>
          <br />
          <Row className="justify-content-md-center">
            <Col sm={10}>
              <Form style={{ backgroundColor: '#0c0c0c',backgroundImage:'linear-gradient(180deg, #0c0c0c 0%, #847477 100%)',border:'2px groove black',borderRadius:'12px',color: 'white',padding:'30px'}} onSubmit={this.onSubmit}>
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
}

export default UserTable