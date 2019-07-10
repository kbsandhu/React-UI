import React from 'react';
import Navigation from './Nav/Navigation'

function About(props) {
  console.log(props);
  return <div className='About'>
  <Navigation></Navigation>

    
    
    About page {props.match.params.id}</div>;
}

export default About;