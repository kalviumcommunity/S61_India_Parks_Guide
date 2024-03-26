// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RenderEntities from './Components/RenderEntities';
import UpdateRender from './Components/UpdateRender'; 
import AddEntityForm from './Components/AddEntityForm';
import LandingPage from './Components/LandingPage';
import ASAPEntityComponent from './Components/ASAPEntity';
import './App.css';

const App = () => {
  const dummyEntity = {
    state: "Andaman and Nicobar Islands",
    name: "Campbell Bay National Park",
    location: "Great Nicobar district, Andaman and Nicobar Islands",
    formed: 1992,
    notableFeatures: "Pristine beaches, mangroves, tropical rainforest",
    fauna: [
      "Megapode",
      "Nicobar Pigeon",
      "Andaman Teal",
      "saltwater crocodile",
    ],
    riversAndLakes: [],
    __v: 0,
  };
  return (
    <Router>
      <div className="app">
        <ul className="navigation">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/asap-entity">ASAP ENTITY</Link>
          </li>
          <li>
            <Link to="/add-entity">ADD ENTITY</Link>
          </li>
          <li>
            <Link to="/all-entities">ALL ENTITIES</Link>
          </li>
        </ul>
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/asap-entity" element={<ASAPEntityComponent {...dummyEntity}/>} />
            <Route path="/add-entity" element={<AddEntityForm />} />
            <Route path="/all-entities" element={<RenderEntities />} />
            <Route path="/update/:id" element={<UpdateRender />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
