// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import LandingPage from './Components/LandingPage';
// import ASAPEntityComponent from './Components/ASAPEntity';
import RenderEntitites from './Components/RenderEntities';
import './App.css'; 

// const App = () => {
//   const dummyEntity = {
//     state: "Andaman and Nicobar Islands",
//     name: "Campbell Bay National Park",
//     location: "Great Nicobar district, Andaman and Nicobar Islands",
//     formed: 1992,
//     notableFeatures: "Pristine beaches, mangroves, tropical rainforest",
//     fauna: ["Megapode", "Nicobar Pigeon", "Andaman Teal", "saltwater crocodile"],
//     riversAndLakes: [],
//     __v: 0
//   };
const App=()=>{
  return (
    // <Router>
    //   <div className='app'>
    //     <ul className='navigation'>
    //       <li><Link to='/'>HOME</Link></li>
    //       <li><Link to='/asap-entity'>ASAP ENTITY</Link></li>
    //     </ul>
    //     <div className='container'>
    //       <Routes>
    //         <Route path='/' element={<LandingPage/>}/>
    //         <Route path='/asap-entity' element={<ASAPEntityComponent {...dummyEntity}/>}/>
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
    <>
    <RenderEntitites/>
    </>
  );
}

export default App;
