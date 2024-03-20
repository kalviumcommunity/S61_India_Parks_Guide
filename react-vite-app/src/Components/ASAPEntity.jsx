// eslint-disable-next-line no-unused-vars
import React from 'react';

function Parks(props) {
  return (
    <div>
        <h1>Park Name: {props.name}</h1>
        <h1>Location: {props.location}</h1>
        <h1>Formed: {props.formed}</h1>
        <h1>Notable Features: {props.notableFeatures}</h1>
        <h1>Fauna: {props.fauna}</h1>
    </div>
  );
}

export default Parks;
