import './App.css';
import React, { useState } from "react"
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import MySeen from './Components/MySeen/MySeen';
import Presentation from './Components/AboutMe/Presentation';
import Geneaka from './Components/Geneaka/Geneaka';
import Lanvest from './Components/Lanvest/Lanvest';
import Code from './Components/Home/Code';

function App() {

  const [switchLanguage, setSwitchLanguage] = useState(true);

  return (
    <Router>
      <NavBar switchLanguage={switchLanguage}/>
      {/* <div className='flags'>
      <span className="flag" onClick={() => {
        setSwitchLanguage(false);
      }}>
        <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-uk-flag-countrys-flags-justicon-flat-justicon.png"/>
      </span>
      <span className="flag" 
      onClick={() => {
        setSwitchLanguage(true);
      }}>
        <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-france-countrys-flags-justicon-flat-justicon.png"/>
      </span>
      </div> */}
      <div className='appButton'>
      </div>
      <Routes>
        <Route path="/" element={<Home switchLanguage={switchLanguage}/>} />
        <Route path="/code" element={<Code switchLanguage={switchLanguage}/>} />
        <Route path="/presentation" element={<Presentation switchLanguage={switchLanguage}/>} />
        <Route path='/projects/lanvest' element={<Lanvest switchLanguage={switchLanguage} />} />
        <Route path='/projects/myseen' element={<MySeen switchLanguage={switchLanguage}/>} />
        <Route path='/projects/geneaka' element={<Geneaka switchLanguage={switchLanguage}/>} />
      </Routes>
    </Router>
  );
}

export default App;
