// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import ASAPEntityComponent from "./Components/ASAPEntity";
import RenderEntitites from "./Components/RenderEntities";
import "./App.css";
import AddEntityForm from "./Components/AddEntityForm";

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
    <>
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
              <Route
                path="/asap-entity"
                element={<ASAPEntityComponent {...dummyEntity} />}
              />
              <Route path="/add-entity" element={<AddEntityForm />} />
              <Route path="/all-entities" element={<RenderEntitites />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
