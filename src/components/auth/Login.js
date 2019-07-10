import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Navigation from '../Nav/Navigation'
class Login extends Component {
  constructor() {
    super();


    this.state = {
      email: "",
      password: "",
    };
  }



  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {

    e.preventDefault();

    const email = this.state.email;
    const pass = this.state.password;
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    var data;
    console.log(email + " pass")
    axios.get('http://localhost:5000/api/users/' + email + "&" + pass)
      .then(response => {
        this.setState({
          data: response.data
        });

        if (response.data != null) {
          console.log("not null");
          this.props.history.push("/homepage");
        }

      })
      .catch(error => {
        console.log("no User Found");


      });






  };
  render() {
    const { errors } = this.state;
    return (
      <div ><Navigation style={{marginTop:"-4em"}}></Navigation>
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Login;
