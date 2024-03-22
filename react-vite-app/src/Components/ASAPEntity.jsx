/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ASAPEntitty.css';
function Parks(props) {
  return (
    <div className='main-container'>
        <p className='main'><strong>Park Name:</strong> {props.name}</p>
        <p className='head-1'><strong>Location:</strong> {props.location}</p>
        <p className='head-2'><strong>Formed:</strong> {props.formed}</p>
        <p className='head-3'><strong>Notable Features: </strong>{props.notableFeatures}</p>
        <p className='head-4'><strong>Fauna:</strong> {props.fauna}</p>
    </div>
  );
}

export default Parks;
