// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateRender.css';

const UpdateRender = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    state: '',
    name: '',
    location: '',
    formed: 0,
    notableFeatures: '',
    fauna: '',
    riversAndLakes: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/read`);
        const { state, name, location, formed, notableFeatures, fauna, riversAndLakes } = response.data;
        // Set the form data state with the existing entity data
        setFormData({ state, name, location, formed, notableFeatures, fauna, riversAndLakes });
      } catch (error) {
        console.log('Error fetching entity:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/api/update/${id}`, formData);
      console.log('Entity updated successfully:', response.data);
      // Redirect or perform any other action after successful update
      navigate('/all-entities');
    } catch (error) {
      console.log('Error updating entity:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>UPDATE ENTITY</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Park Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="formed">Formed:</label>
          <input type="number" id="formed" name="formed" value={formData.formed} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="notableFeatures">Notable Features:</label>
          <input type="text" id="notableFeatures" name="notableFeatures" value={formData.notableFeatures} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="fauna">Fauna:</label>
          <input type="text" id="fauna" name="fauna" value={formData.fauna} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="riversAndLakes">Rivers And Lakes:</label>
          <input type="text" id="riversAndLakes" name="riversAndLakes" value={formData.riversAndLakes} onChange={handleChange} />
        </div>
        <button className="btn-form" type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateRender;
