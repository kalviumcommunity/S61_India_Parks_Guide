// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RenderEntities.css";
import { useNavigate } from "react-router-dom";

function RenderEntities() {
  const [entities, setEntities] = useState([]);
  const [filteredData, setFilteredData] = useState("");
  const [CreatedBy, setCreatedBy] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch entities from the server
    axios
      .get("http://localhost:3001/api/read")
      .then((response) => {
        setEntities(response.data.data); // Set the entities in the state
        const selectedCreatedBy = response.data.data.reduce((curr, item) => {
          if (!curr.includes(item.created_by)) {
            curr.push(item.created_by);
          }
          return curr;
        }, []);
        setCreatedBy(selectedCreatedBy);
      })
      .catch((error) => {
        console.log("Error fetching entities:", error);
      });
  }, []);

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
    navigate("/update/:id", { state: item });
  };

  const handleFilterChange = (e) => {
    setFilteredData(e.target.value);
  };

  const filteredEntities = filteredData
    ? entities.filter((item) => item.created_by === filteredData)
    : entities;

  return (
    <div>
      <h1 className="heading-3">ALL ENTITIES</h1>
      <div className="relation">
        <label htmlFor="creatorFilter">Filter by creator:</label>
        <select
          id="creatorFilter"
          value={filteredData}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          {CreatedBy.map((creator, index) => (
            <option key={index} value={creator}>
              {creator}
            </option>
          ))}
        </select>
      </div>
      <div className="entities-container">
        <ul>
          {filteredEntities.map((entity) => (
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
                <div className="entity-buttons">
                  <button className="edit-button" onClick={() => handleUpdate(entity)}>Edit</button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(entity._id)}
                  >
                    Delete
                  </button>
                  
                
              
              <div className="username"><strong>Created By:</strong> {entity.created_by}</div>
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



