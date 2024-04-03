// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './AddEntityForm.css';

function AddEntityForm() {
  const [formData, setFormData] = useState({
    state: '',
    name: '',
    location: '',
    formed: '',
    notableFeatures: '',
    fauna: '',
    floraAndFauna: '',
    riversAndLakes: '',
    created_by: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData);
  
      const response = await fetch('https://s61-india-parks-guide-1.onrender.com/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Entity added successfully:', data);
  
      setFormData({
        state: '',
        name: '',
        location: '',
        formed: '',
        notableFeatures: '',
        fauna: '',
        floraAndFauna: '',
        riversAndLakes: '',
        created_by: ''
      });
  
    } catch (error) {
      console.error('Error adding entity:', error.message);
    }
  };

  return (
    <div className="entity-form">
      <h2 className='form-title'>ADD ENTITY</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">State:</label>
          <input type="text" className="form-input" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input type="text" className="form-input" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Location:</label>
          <input type="text" className="form-input" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Formed:</label>
          <input type="number" className="form-input" name="formed" value={formData.formed} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Notable Features:</label>
          <input type="text" className="form-input" name="notableFeatures" value={formData.notableFeatures} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Fauna:</label>
          <input type="text" className="form-input" name="fauna" value={formData.fauna} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-label">Flora and Fauna:</label>
          <input type="text" className="form-input" name="floraAndFauna" value={formData.floraAndFauna} onChange={handleChange}  />
        </div>
        <div className="form-group">
          <label className="form-label">Rivers and Lakes:</label>
          <input type="text" className="form-input" name="riversAndLakes" value={formData.riversAndLakes} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Created By:</label>
          <input type="text" className="form-input" name="created_by" value={formData.created_by} onChange={handleChange} required />
        </div>
        <button type="submit" className="form-btn">Submit</button>
      </form>
    </div>
  );
}

export default AddEntityForm;
