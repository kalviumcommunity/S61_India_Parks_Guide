// eslint-disable-next-line no-unused-vars
import React from 'react';
import './RenderEntities.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Entity() {
    const [entities, setEntities] = useState([]);
  
    useEffect(() => {
      // Fetch entities from the server
      axios.get('http://localhost:3001/api/read')
        .then(response => {
          console.log(response.data)
          setEntities(response.data.data); // Set the entities in the state
        })
        .catch(error => {
          console.log('Error fetching entities:', error);
        });
    }, []); // Empty dependency array ensures useEffect runs only once after component mount
  
    return (
      <div>
        <h1>All Entities</h1>
        <div className='main-container'>
        <ul>
          {entities.map(entity => (
            
            <li key={entity._id} className="entity-item">
            <h2>{entity.state}</h2>
            <h3>{entity.name}</h3>
            <p><strong>Location:</strong>{entity.location}</p>
            <p><strong>Formed:</strong>{entity.formed}</p>
            <p><strong>Notable Features:</strong>{entity.notableFeatures}</p>
            <p><strong>Fauna:</strong>{entity.fauna}</p>
            <p>Rivers And Lakes:{entity.riversAndLakes}</p>
            
          
            <hr />
        </li>
          
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Entity;
