import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Redirect } from 'react-router'
import { Layout, Drawer, Navigation, Content, Header, Button, Text } from 'react-mdl'
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class Register extends Component {
  constructor() {

    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      masterpassword: "",
    };


  }

  onSubmit = (newUser, actions) => {

    var json = JSON.stringify(newUser);
    console.log("Json = " + json);
    if (newUser.password === newUser.password2) {

      const url = 'http://localhost:5000/api/users/';
      axios({
        headers: { 'content-type': 'application/json' },

        method: 'post',
        url: url,
        data: json
      }).then((response) => {
        console.log("redirection");
        this.props.history.push('/login');

      })
        .catch(function (errors) {
          console.log("errors=" + errors.response.data);
          actions.setFieldError('general', errors.response.data);

        });
    }

    else {
      console.log("error in password");
    }



    console.log(newUser);
  };

  render() {
    const SignupSchema = Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      password: Yup.string()
        .required('Required')
        .min(6, 'Too Short!')
      ,
      password2: Yup.string()
        .required()
        .label('Confirm password')
        .test('passwords-match', 'Passwords must match', function (value) {
          return this.parent.password === value;
        }),
      masterPassword: Yup.string()
        .required('Required'),
    });

    if (window.sessionStorage.getItem("loggedin") == "true") {
      window.location = '/profile';
      return <div> </div>
    }


    else {
      return (
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            password2: '',
            masterPassword: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
            // same shape as initial values
            this.onSubmit(values, actions);
          }}
        >
          {({ errors, touched, handleChange }) => (
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
                <div className="container " style={{ width: '500px', marginTop: "2rem", paddingBottom: '2em' }} >
                  <div className="row justify-content-center" >
                    <div className="col-9 justify-content-center" style={{ paddingBottom: '2em', backgroundColor: 'rgb(192,192,192,0.5)', border: '2px groove white', borderRadius: '15px', }}>
                      <div className="col-9  justify-content-center" style={{ color: 'white', marginLeft: '60px', paddingBottom: '2em' }}>
                        <h4>
                          <b>Register</b> below
              </h4>
                        <p className="grey-text text-darken-1">
                          Already have an account? <Link to="/login" style={{ color: 'blue' }}>Log in</Link>
                        </p>
                      </div>
                      <Form style={{ color: 'white', fontWeight: 'bold' }}>
                        <div className="input-field col s12">
                          <label htmlFor="name">Name</label>

                          <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                            onChange={handleChange}
                            id="name"
                            type="text"
                            style={{ backgroundColor: 'transparent' }}
                          />
                          <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="input-field col s12">
                          <label htmlFor="email">Email</label>
                          <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                            onChange={handleChange}
                            id="email"
                            type="email"
                            style={{ backgroundColor: 'transparent', textColor: 'white' }}
                          />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="input-field col s12">
                          <label htmlFor="password">Password</label>
                          <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                            onChange={handleChange}
                            id="password"
                            type="password"
                            style={{ backgroundColor: 'transparent' }}
                          />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="input-field col s12">
                          <label htmlFor="password2">Confirm Password</label>
                          <Field name="password2" type="password" className={'form-control' + (errors.password2 && touched.password2 ? ' is-invalid' : '')}
                            onChange={handleChange}
                            id="password2"
                            type="password"
                            style={{ backgroundColor: 'transparent' }}
                          />
                          <ErrorMessage name="password2" component="div" className="invalid-feedback" />
                          {/* <input
                            onChange={this.onChange}
                            value={this.state.password2}
                            id="password2"
                            type="password"
                          /> */}
                        </div>
                        <div className="input-field col s12">
                          <label htmlFor="masterPassword">Set Master Password</label>
                          <Field name="masterPassword" type="password" className={'form-control' + (errors.masterPassword && touched.masterPassword ? ' is-invalid' : '')}
                            onChange={handleChange}
                            id="masterPassword"
                            type="password"
                            style={{ backgroundColor: 'transparent', textColor: 'blue' }}
                          />
                          <ErrorMessage name="masterPassword" component="div" className="invalid-feedback" />
                          {/* <input
                            onChange={this.onChange}
                            value={this.state.masterpassword}
                            id="masterpassword"
                            type="password"
                          /> */}
                        </div>
                        <p style={{ color: 'red' }}>{errors.general}</p>
                        <div className="col-5" style={{ paddingLeft: "90px" }}>
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
                            Sign up
                </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </Layout>
            </div>
          )}
        </Formik>
      )
    }
  }
}

export default Register;