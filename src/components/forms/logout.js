
import React from "react";
 const logoutuser = function logout(props) {

    window.sessionStorage.setItem('loggedin', false);
    window.sessionStorage.setItem('token', null);
  window.location = "/";

    
}

export default logoutuser;