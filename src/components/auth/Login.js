import React, { Component } from "react";
import axios from 'axios';
import { Layout, Drawer, Navigation, Content, Header, Button, Text } from 'react-mdl'
import { Link } from "react-router-dom";
import { Redirect } from 'react-router'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
//   onChange = e => {
//     this.setState({ [e.target.id]: e.target.value });
//   };
  onSubmit = (userData, actions) => {


    var data;
    console.log(userData.email + " pass")
    axios.get('http://localhost:5000/api/users/' + userData.email + "&" + userData.password)
      .then(response => {
        this.setState({
          data: response.data
        });

        if (response.data != null) {

          //redirect to other page 
          const data1 = response.data;
          if (data1.isValid) {
            window.sessionStorage.setItem('loggedin', 'true');
            window.sessionStorage.setItem('token', data1.token);


            console.log(data1.token)
            window.location="/profile"

        }
          else {
            console.log(data1.isValid);
          }
        }

      })
      .catch(errors => {
        actions.setFieldError('general', errors.response.data);
        console.log(errors.response.data);
        

      });
  };
  render() {
    const SignupSchema = Yup.object().shape({
        email: Yup.string()
          .required('Required'),
        password: Yup.string()
          .required('Required')
      });
  
    if (window.sessionStorage.getItem("loggedin")== "true") {
      window.location = '/profile';
      return <div> </div>
    }
    else {
      const { errors } = this.state;
      return (
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          // same shape as initial values
          this.onSubmit(values, actions);
        }}
      >
        {({ errors, touched, handleChange }) => (
        <div style={{ height: '600px', position: 'relative' }}>
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
            <div className="container" style={{ width: '400px',backgroundColor:'rgb(192,192,192,0.5)',marginTop: "6rem",paddingBottom:'2em',  border:'2px groove white',borderRadius:'15px'}}>
              <div style={{  }} className=" row justify-content-md-center mr-auto">
                <div className="col-3" style={{ color: 'white' }}>
                  <h4>
                    <b>Login</b>
              </h4>
                </div>
              </div>
              <div className="  row justify-content-md-center mr-auto">
                <div className="col-8">
                  <p className="grey-text">
                    Don't have an account? <Link to="/register" style={{ color: 'blue' }}>Register</Link>
                  </p>
                </div>
              </div>
              <Form style={{ color: 'white', fontWeight: 'bold' }}>
                <div className="  row justify-content-center">
                  <div className=" col-3">
                    <label htmlFor="email" style={{ fontWeight: 'bold',color:'white' }}>Email</label>
                  </div>
                  <div className=" col-7">

                  <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                            onChange={handleChange}
                            id="email"
                            type="email"
                            style={{ backgroundColor: 'transparent' }}
                          />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                         
                    {/* <input
                      onChange={this.onChange}
                      value={this.state.email}
                      id="email"
                      type="email"
                      size="30"
                      style={{background: 'transparent',
                        border: '1px solid white',color:'white'}}
                        placeholder='Enter Email'
                    /> */}
                  </div>
                </div>
                <br/>
                <div className="  row justify-content-center">
                  <div className=" col-3">
                    <label htmlFor="password" style={{ fontWeight: 'bold',color:'white'}}>Password</label>
                  </div>
                  <div className=" col-7">
                  <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                            onChange={handleChange}
                            id="password"
                            type="password"
                            style={{ backgroundColor: 'transparent' }}
                          />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    {/* <input
                      onChange={this.onChange}
                      value={this.state.password}
                      id="password"
                      type="password"
                      size="30"
                      style={{background: 'transparent',
                        border: '1px solid white',color:'white'}}
                        placeholder='Enter Password'
                    /> */}
                  </div>
                </div>
                <p style={{color:'red'}}>{errors.general}</p>
                <div className="  row justify-content-md-center mr-auto">

                  <div className="col-5">
                    <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      type="submit"
                      className="btn btn-raised btn-primary"
                    >
                      Login
                </button>
                  </div>
                </div>
            </Form>
            </div>
          </Layout>
        </div>
        )
       
    }
    </Formik>
      )}
}
}
export default Login;