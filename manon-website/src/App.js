import './App.css';
import React, { useState } from "react"
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Background from './Components/Background/Background';
import Footer from './Components/Footer/Footer';
import Lanvest from './Components/Projects/Lanvest';
import Myseen from './Components/Projects/Myseen';
import Geneaka from './Components/Projects/Geneaka';
import BunnyFinder from './Components/Projects/BunnyFinder';
import Resume from './Components/Resume/Resume';
import Chat from './Components/Contact/Chat';

function App() {

  const [switchLanguage, setSwitchLanguage] = useState(false);

  return (
    <Router>
      <Background />
      <NavBar switchLanguage={switchLanguage}/>
      <div className='flags'>
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
      </div>
      <Routes>
        <Route path="/" element={<Home switchLanguage={switchLanguage}/>} />
        <Route path="/contact" element={<Contact switchLanguage={switchLanguage}/>} />
        <Route path="/resume" element={<Resume switchLanguage={switchLanguage} />} />
        <Route path='/projects/lanvest' element={<Lanvest switchLanguage={switchLanguage} />} />
        <Route path='/projects/myseen' element={<Myseen switchLanguage={switchLanguage}/>} />
        <Route path='/projects/geneaka' element={<Geneaka switchLanguage={switchLanguage}/>} />
        <Route path='/projects/bunnyFinder' element={<BunnyFinder switchLanguage={switchLanguage}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
