import React, { Component } from 'react'
import { Table, Container ,Row,Col} from 'react-bootstrap'
import UserMenu from '../userProfile/UserMenu'
import axios from 'axios';
import {Link} from 'react-router-dom';

export class UserTable extends Component {


  state = {
    userdata: [],
    isValidPass : false,
    isDataAvailable: "",
    srno:0,
  }

  constructor()
  {
    super();
    this.state.isValidPass = false;
    this.state.userdata = [];
    this.handleClick =  this.handleClick.bind(this)
    this.handleHidePass = this.handleHidePass.bind(this)
    if(!window.sessionStorage.getItem("loggedin")==true)
    {

      window.location = "/"
    }
  }

handleHidePass(){


const url = 'http://localhost:5000/api/websites/';
axios({
  url: url,
  method: 'get',
  headers: { 'x-auth-token': window.sessionStorage.getItem('token') },
})
  .then(response => {
    this.setState({
      userdata: response.data,
      isValidPass: false
    })
    console.log(response)
  })

}

  handleClick(e) {
    
  //console.log(e.target.id);
    const enteredName = prompt('Please enter your Master Pass')
    if(enteredName!=null)
    {
      const url = 'http://localhost:5000/api/websites/' + enteredName;
      axios({
       url: url,
       method: 'get',
       headers: { 'x-auth-token': window.sessionStorage.getItem('token')},
       })
       .then(response => {
        console.log("in then + " + response.status)

        console.log(response.statusText);
          if(response.status != 404)
          {
       
          console.log("in if + " + response.status)
           this.setState({
           userdata: response.data,
           isValidPass : true
         })
      
         
        } 
  
       }).catch(function (error) {
        console.log(error);
        alert("master pass not Valid")
      });

      
    }
   
    
     
  }

  componentDidMount() {
  this.handleHidePass();
  }
  render() {
  
    if (window.sessionStorage.getItem("loggedin")!="true") {
      window.location = "/";
      return <div> </div>
      
    }

    else
    {

      if(this.state.userdata.length <=0)
      {
        
        this.state.isDataAvailable = "No Record Found";
       
     
      }
      else
      {
        this.state.isDataAvailable = " ";
      }
     
    
  
    return (
      <div style={{backgroundImage:'linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%)',height:'700px'}} className='fontStyle'>
        <UserMenu></UserMenu>

        <Container>
        <Row className="row justify-content-center" >
            <Col>

           
            <h4>
              Enter Your Master Password to View all Passwords
            </h4>

            
            { !this.state.isValidPass? (

                
              

                <button
                  style={{
                    width: "auto",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  onClick={this.handleClick}
                  id="2"
                  type="button"
                  className="btn btn-raised btn-info"
                 >
                    Click here to Enter You Master Password
                 </button>
           
            ): ( 
                <button
                  style={{
                    width: "auto",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  onClick={this.handleHidePass}
                  id="2"
                  type="button"
                  className="btn btn-raised btn-info">
                  Click here to hide your Passwords
              
                </button>
                )
                }
              </Col>
          </Row>
<br/>
         
          <Table striped bordered hover variant="dark" className="  table-hover">    
            <thead>
              <tr>
                <th>Sr#</th>
                <th>Website Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            <h3>{this.state.isDataAvailable}</h3>
              {this.state.userdata.map(data => (
                
                <tr key={data._id}>
                  <td>{this.state.srno = this.state.srno+1}</td>
                 
                  <td>{data.title}</td>
                  <td>{data.userName}</td>
                  <td>{data.password}</td>
                  <td>{data.email}</td>
                  <td>{data.date}</td>
                 
                 
                  <td> { this.state.isValidPass? (
                  
                  
                  <Link type="primary" className="btn btn-raised btn-primary" to=
                  {{
                      pathname:"/edit",
                     data: {
                        id: data._id,
                        title: data.title,
                        password:data.password,
                        email:data.email,
                        username:data.userName

                      }
                  


                  }} >Edit</Link> ) : ( 

                    <input type="button" className="btn btn-primary btn-raised" value="Enable Edit"  onClick={this.handleClick}></input>
                  )}


                  <Link type="primary" className="btn btn-raised btn-danger" to={{
               pathname: "/delete",
               aboutProps: {
               name: data._id
                }
              }} >Delete</Link></td>                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}
}

export default UserTable
