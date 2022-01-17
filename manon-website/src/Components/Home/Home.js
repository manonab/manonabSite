import React, {useEffect} from 'react';
import './Home.scss';
import lanvestCapture from "../../assets/lanvestCapture.png";
import geneakaCapture from "../../assets/geneakaCapture.png";
import mySeenCapture from "../../assets/mySeenCapture.jpg";
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
    useEffect(() => {
        const test = async () => {
            try{
                let res = await axios.get('http://localhost:3000/')
                console.log(res.data)
            }
            catch(err){
                console.log(err)
            }
        };
        test();
    },[])
    return (
        <>
            <div className='home'>
                <h1 className='bigTitle' style={{ color: "#fff" }}>Manon Abel-coindoz</h1>
                <h4 className='title'>Développeuse Full-Stack JavaScript</h4>
                <p style={{ marginLeft: "50px" }}>Une courte introduction pour me présenter</p>
                <div className='photo'>
                    <p style={{ textAlign: 'center' }}>ma photo ici</p>
                </div>
            </div>
            <div className='circle-app'><p style={{ textAlign: 'center' }}>mon app</p></div>
            <div className='line'></div>
            <h1 className='projectTitle'>Projets</h1>
            <div className='allCircle'>
                <div className='websiteTitles'>
                    <span class='cut-text'>websites</span>
                    <div className='websiteCircle'>
                        <div className='circleProject'
                            style={{ backgroundImage: `url(${lanvestCapture})`}}>
                            <NavLink to="/projects/lanvest" style={{height:"150px"}}>
                                <div className='innerCircle'>
                                </div>
                            </NavLink>
                        </div>
                        <div className='circleProject' style={{backgroundImage: `url(${geneakaCapture})` }}>
                            <NavLink to="/projects/geneaka" style={{height:"150px"}}>
                                <div className='innerCircle'>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <span className='groupTitles'>
                        <p className='titleProject' >Lanvest</p>
                        <p className='titleProject' >Généaka</p>
                    </span>
                </div>
                <div className='websiteTitles'>
                    <span class='cut-app'>Apps</span>
                    <div className='websiteCircle'>
                        <div className='circleProject' style={{backgroundImage: `url(${mySeenCapture})` }}>
                            <NavLink to="/projects/myseen" style={{ textDecoration: 'none' }}>
                                <div className='innerCircle'>
                                    {/* <p className='titleProject' >MySeen</p> */}
                                </div>
                            </NavLink>
                        </div>
                        <div className='circleProject'>
                            <NavLink to="/projects/bunnyFinder" style={{ textDecoration: 'none' }}>
                                <div className='innerCircle'>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <span className='groupTitles'>
                        <p className='titleProject' >My S.E.E.N</p>
                        <p className='titleProject' >Bunny Finder</p>
                    </span>
                </div>
            </div>
        </>
    )
};

export default Home;
