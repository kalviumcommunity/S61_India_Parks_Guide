// RenderEntities.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RenderEntities.css';

function Entity() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    // Fetch entities from the server
    axios.get('http://localhost:3001/api/read')
      .then(response => {
        setEntities(response.data.data); // Set the entities in the state
      })
      .catch(error => {
        console.log('Error fetching entities:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once after component mount

  return (
    <div>
      <h1 className='heading-3'>ALL ENTITIES</h1>
      <div className='entities-container'>
        <ul>
          {entities.map(entity => (
            <li key={entity._id} className="entity-item">
              <div className="entity-info">
                <h2 className="entity-state">{entity.state}</h2>
                <h3 className="entity-name">{entity.name}</h3>
                <p className="entity-location"><strong>Location:</strong> {entity.location}</p>
                <p className="entity-formed"><strong>Formed:</strong> {entity.formed}</p>
                <p className="entity-notable-features"><strong>Notable Features:</strong> {entity.notableFeatures}</p>
                <p className="entity-fauna"><strong>Fauna:</strong> {entity.fauna}</p>
                <p className="entity-rivers-and-lakes"><strong>Rivers And Lakes:</strong> {entity.riversAndLakes}</p>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Entity;
