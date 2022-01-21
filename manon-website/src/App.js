import './App.css';
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
  return (
    <Router>
        <Background />
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/resume" element={<Resume />} />
            <Route path='/projects/lanvest' element={<Lanvest />} />
            <Route path='/projects/myseen' element={<Myseen />} />
            <Route path='/projects/geneaka' element={<Geneaka />} />
            <Route path='/projects/bunnyFinder' element={<BunnyFinder />} />
          </Routes>
        <Footer />
      </Router>
  );
}

export default App;
