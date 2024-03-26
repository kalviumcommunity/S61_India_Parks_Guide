// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import {  useNavigate, useLocation } from "react-router-dom";
import "./UpdateRender.css";

const UpdateRender = () => {
  const location = useLocation();
  const initialData = location.state;
  // const { id } = useParams();
  const navigate = useNavigate();

  // Define state variable for formData
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    // Copy the current formData state and update the specific field
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log("Form Data:", formData); // Log form data before sending request
  //   // axios
  //   //   .put(`http://localhost:3001/api/update/${id}`, formData)
  //   //   .then((response) => {
  //   //     console.log("Entity updated successfully:", response.data);
  //   //     // Redirect or perform any other action after successful update
  //   //     navigate("/all-entities");
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log("Error updating entity:", error);
  //   //   });
  // };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Data is updating", formData._id);
    axios
      .put(`http://localhost:3001/api/update/${formData._id}`, formData)
      .then((res) => {
        console.log("Entity updated successfully", res.data)
        navigate('/all-entities')
      })
      .catch((err) => console.log("Error updating entity:", err));
  };
  return (
    <div className="form-container">
      <h1>UPDATE ENTITY</h1>
      <form>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Park Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formed">Formed:</label>
          <input
            type="number"
            id="formed"
            name="formed"
            value={formData.formed}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notableFeatures">Notable Features:</label>
          <input
            type="text"
            id="notableFeatures"
            name="notableFeatures"
            value={formData.notableFeatures}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fauna">Fauna:</label>
          <input
            type="text"
            id="fauna"
            name="fauna"
            value={formData.fauna}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="riversAndLakes">Rivers And Lakes:</label>
          <input
            type="text"
            id="riversAndLakes"
            name="riversAndLakes"
            value={formData.riversAndLakes}
            onChange={handleChange}
          />
        </div>
        <button className="btn-form" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateRender;
3;
