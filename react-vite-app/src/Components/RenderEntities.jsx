// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./RenderEntities.css";
import { useNavigate } from "react-router-dom";
// import {useHistory} from 'react-router-dom';

function RenderEntities() {
  const [entities, setEntities] = useState([]);
  // const history=useHistory()
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch entities from the server
    axios
      .get("http://localhost:3001/api/read")
      .then((response) => {
        setEntities(response.data.data); // Set the entities in the state
      })
      .catch((error) => {
        console.log("Error fetching entities:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once after component mount

  const handleDelete = (id) => {
    // Implement delete logic here
    axios
      .delete(`http://localhost:3001/api/delete/${id}`)
      .then((response) => {
        // Update entities state after deletion
        setEntities(entities.filter((entity) => entity._id !== id));
        console.log("Entity deleted successfully:", response.data);
      })
      .catch((error) => {
        console.log("Error deleting entity:", error);
      });
  };

  const handleUpdate = (item) => {
    // console.log(item);
    navigate("/update/:id", { state: item });
  };
  
  

  return (
    <div>
      <h1 className="heading-3">ALL ENTITIES</h1>
      <div className="entities-container">
        <ul>
          {entities.map((entity) => (
            <li key={entity._id} className="entity-item">
              <div className="entity-info">
                <h2 className="entity-state">{entity.state}</h2>
                <p className="entity-name">
                  <strong>Park Name:</strong>
                  {entity.name}
                </p>
                <p className="entity-location">
                  <strong>Location:</strong> {entity.location}
                </p>
                <p className="entity-formed">
                  <strong>Formed:</strong> {entity.formed}
                </p>
                <p className="entity-notable-features">
                  <strong>Notable Features:</strong> {entity.notableFeatures}
                </p>
                <p className="entity-fauna">
                  <strong>Fauna:</strong> {JSON.stringify(entity.fauna)}
                </p>
                <p className="entity-rivers-and-lakes">
                  <strong>Rivers And Lakes:</strong> {entity.riversAndLakes}
                </p>
                {/* Update and delete buttons */}
                <div className="entity-buttons">
                  {/* <Link to={`/update/${entity._id}`} className="update-button"> */}
                  <p onClick={() => handleUpdate(entity)}>Edit</p>
                  {/* </Link> */}
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(entity._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RenderEntities;


