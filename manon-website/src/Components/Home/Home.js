import React, { useEffect } from 'react';
import './Home.scss';
import lanvestCapture from "../../assets/lanvestCapture.png";
import geneakaCapture from "../../assets/geneakaCapture.png";
import mySeenCapture from "../../assets/mySeenCapture.jpg";
import manon from "../../assets/moiMeme.jpg";
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Home = () => {

    return (
        <>
            <div className='home'>
                    <h1 className='bigTitle' style={{ color: "#fff"}}>Manon Abel-coindoz</h1>
                    <h4 className='title'>Développeuse Full-Stack JavaScript</h4>
                    <p><b>React / React-Native / M.E.R.N</b></p>
                    <span className='groupHome'>
                    <p>
                        J'ai commencé une reconversion professionnelle en 2019 avec une formation courte à la wild code school.
                        Ensuite j'ai débuté mon expérience au sein de <b>Focus Games</b> (Glasgow) afin de créer un outil marketing en interne avec <b>PHP/MySQL et JS</b>.
                    </p>
                    <br></br>
                    <p>
                        Après Focus Games j'ai créée une application de management en interne avec <b>React-Native, Node.js, MongoDB, Express.js</b> pour Lanvest.
                    </p>
                    <br></br>
                    <p>
                        Aujourd'hui je suis à la recherche d'un contrat à durée indéterminé pour un projet qui allie professionnalisme et engagement. J'ai toujours été attirée par l'économie sociale et solidaire, je veux apporter mes compétences dans un projet qui a du sens.
                    </p>
                    </span>
            </div>
            <div className='circle-app'><p style={{ textAlign: 'center' }}></p></div>
            <div className='line'></div>
            <h1 className='projectTitle'>Projets</h1>
            <div className='allCircle'>
                <div className='websiteTitles'>
                    <span class='cut-text'>sites</span>
                    <div className='websiteCircle'>
                        <div className='circleProject'
                            style={{ backgroundImage: `url(${lanvestCapture})` }}>
                            <NavLink to="/projects/lanvest" style={{ height: "150px" }}>
                                <div className='innerCircle'>
                                </div>
                            </NavLink>
                        </div>
                        <div className='circleProject' style={{ backgroundImage: `url(${geneakaCapture})` }}>
                            <NavLink to="/projects/geneaka" style={{ height: "150px" }}>
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
                        <div className='circleProject' style={{ backgroundImage: `url(${mySeenCapture})` }}>
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
