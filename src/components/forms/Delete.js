import axios from 'axios';
import { Redirect } from 'react-router'
import React, { PropTypes } from 'react';

import { BrowserRouter } from 'react-router-dom';



  const Delete = (props) =>{
    
    //console.log("in delete")
    //console.log("id" , props.location.aboutProps)
    
    var i = props.location.aboutProps;
    const url = 'http://localhost:5000/api/websites/' + i.name;
    
    console.log(url);
        axios({
      url: url,
      method: 'delete',
      headers: { 'x-auth-token': window.sessionStorage.getItem('token') },
      
    })
      .then(response => {
      
        console.log(response.status)
      })

      return    window.location = '/profile';
    
}


    
export default Delete;